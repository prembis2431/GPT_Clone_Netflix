import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";


const Body = () => {
 
 // Hook coming from react-router DOM
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect takes two arguments- a function and an array of depedencies.
  // If you specify dependencies, the effect will only run when those dependencies have changed since the last render.
  // If you omit the dependencies array, the effect will run after every render.

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user; // updating the redux store
  //       dispatch(
  //         addUser({ 
  //         uid: uid, 
  //         email: email, 
  //         displayName: displayName, 
  //         photoURL: photoURL 
  //       }));
        
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
        
  //     }
  //   });
  // }, []);


  
  // Writing navigate function here will give us error, cos Body.js is acting as a parent component
  // and all the page navigation is under RouterProvider and they all act like a child components

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
