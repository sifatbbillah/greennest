import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
export const valueContext = createContext()

const Rootlayout = () => {
  const [userprofile, setUserprofile] = useState(null);
  const [loding, setLoding] = useState(true);
  const provider = new GoogleAuthProvider();

  // console.log(userprofile)


  const google = () => {

    return signInWithPopup(auth, provider)



  }

  const usesignup = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)

  }

  const uselogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     setUserprofile(user);
    //     // console.log(user)
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode,errorMessage)
    // });
  }

  const handelLogout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });

  }



  useEffect(() => {

    const unscribe = onAuthStateChanged(auth, (userprofile) => {

      // console.log(userprofile)

      setUserprofile(userprofile);
      setLoding(false);

      if (userprofile) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = userprofile.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unscribe();
    }

  }, [])

  const handelForgetpass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset password email sent!");
       
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send reset email. Please try again.");
      });
  };
  


  const contextValues = {
    usesignup,
    uselogin,
    userprofile,
    handelLogout,
    loding,
    google,
    handelForgetpass

  }

  // console.log(userprofile);
  return (
    <div>
      <valueContext.Provider value={contextValues}>

        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-116px)]'>
          {/* <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'> */}
          <Outlet></Outlet>
          {/* </div> */}
        </div>



      </valueContext.Provider>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Rootlayout;