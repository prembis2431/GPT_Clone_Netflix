import React, { useEffect, useRef, useState } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UserMenuButton.css"; // Create a CSS file for styling
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"; // Named exports allow you to export multiple values
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
// from a module, each with a specific name. You can
// export variables, functions, classes, or any JavaScript
// value by specifying a name for each export.

const Header = () => {
  const menuRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptButtonLang = useSelector(store=> store.config.lang)
  const user = useSelector((store) => store.user); // to select user from redux store in order to find that particular
  // who is signing in will have its own photo using photoURL
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })

      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    // we used onChange method there in the select button
    // so it will trigger an event whenever different language is selected,
    // so we gonna capture the event as a parameter e

    // we could also used useRef() hook to refer the selected options

    dispatch(changeLanguage(e.target.value));
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // Clicked outside the component
      // Place your logic here for what should happen when clicked outside
      setIsMenuOpen(false);
    }
  }


   
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // unsubscribe is used to remove the
      // eventListeners which sticks everytime the API is called
      // causing usage of immense memory, and unpredicted behaviour
      // for that purpose, return statement is present as a clean up code
      if (user) {
        const { uid, email, displayName, photoURL } = user; // updating the redux store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    document.addEventListener('mousedown', handleOutsideClick);

    // unsubscribe when component gets unmounted
    return () =>{ unsubscribe();
    
      document.removeEventListener('mousedown', handleOutsideClick);
    
    }


  }, [isMenuOpen]);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    // we can use state variable or redux store
    // dispatching action to make the state of showGptSearch true in store

    
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {/* <div className='flex'>
      <img alt='userIcon' src='https://occ-0-2480-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'/> 
   

     <button>Sign Out</button> */}

      {user && (
        <div className="user-menu-button">
          <span className=" flex justify-between md:flex ">
            <select
              className=" w-27 py-1 h-8 mx-3 bg-red-700 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            
            <button
              className=" md:w-28 h-8 mx-3 bg-purple-800 text-white text-center"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT"}
            </button>
            <button className="menu-button flex">
              <img
                //  onMouseOut={closeMenu}
                alt="userIcon"
                src={user.photoURL}
              />
              <span
                onClick={toggleMenu}
                style={{
                  color: "white",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                }}
              >
                ^
              </span>
              
            </button>{" "}
            
          </span>

          {isMenuOpen && (
            <div ref={menuRef} className="menu">
              <ul>
                <li>Account</li>
                <li>Settings</li>
                <li>
                  <button>Help Centre</button>
                </li>
                <br/>
                <hr/>
                <li>
                  <button style={{marginTop: "1 px"}} onClick={handleSignOut}>{lang[gptButtonLang].signOutOfNetflix}</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
