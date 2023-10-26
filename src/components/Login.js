import React, { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInFom] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const ToggleExpansion = () => {
    setExpanded(!expanded);
  };

  const ToggleSignInForm = () => {
    setIsSignInFom(!isSignInForm);
  };

  const HandleButtonClick = () => {
    // Validate the form data

    // if(!isSignInForm){

    //    var message= CheckValidData(email.current.value, password.current.value);
    //    setErrorMessage(message);

    // }
    // else{
    // message= CheckValidData(email.current.value, password.current.value);
    // setErrorMessage();
    // }

    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // SignUp and SignIn Logic
    // every time we use these kind of APIs like
    // createUserWithEmailAndPassword or resetEmail or resetPassword
    // anything any API, we need to use 'const auth= getAuth();
    // so instead of writing it repeatedly, we can just write it once
    // in as a separate component (as a central place, for eg. - here Firebase.js)
    // and export it, then we can use it anytime we want repeatedly.

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          // the above parameters will send the data to firebase and if the data is valid after
          // authenticated, then firebase will provide a response
          // and it is stored in promise and it will give us this 'user' object
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser; // updating the redux store
              // but using "user" won't actually update
              // the store, cos from updateProfile(user,{....)
              // that is unupdated user's data, so
              // we will use auth
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setting the errormessage if any...
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen object-cover bg-gradient-to-b from-black"
          src={BG_IMG}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[80%] md:w-3/12 p-12 absolute bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600 rounded-md"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-md"
        />

        {/* <p className="text-red-700 font-bold text-sm">{ErrorMessage}</p> */}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-md"
        />

        <p className="text-red-700 font-bold text-sm">{ErrorMessage}</p>

        <button
          onClick={HandleButtonClick}
          className="p-4 my-6 bg-red-700 color-white w-full rounded-md cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>
          {isSignInForm
            ? " New to Netlflix? Sign up Now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
