import React, { useContext, useState } from 'react';
import { valueContext } from '../Rootlayout/Rootlayout';
import { BiHide, BiShow } from 'react-icons/bi';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation, useNavigate } from 'react-router';

const Signup = () => {
  const { usesignup,google } = useContext(valueContext);

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const from = location?.state?.from


  console.log(from)

  const navigate = useNavigate()

  const hendelgoogle =()=>{
    google().then((result) => {
      
       
        const user = result.user;
        console.log(user)


        navigate(from?from:"/")

        
        
      }).catch((error) => {
        // Handle Errors here.
      console.log(error)
        // ...
      });
   
  }


  const handelsignup = (e) => {
    e.preventDefault();

    const yourname = e.target.yourname.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;





    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 6 characters long, include one uppercase letter and one number.'
      );
      return;
    }

    setPasswordError('');
    usesignup(email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
       navigate(from?from:"/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };

  return (
   <>
   <Helmet><title>Sign | MovieVerse</title></Helmet>
   <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(340deg,_rgba(6,182,212,0.7)_23%,_rgba(139,92,246,0.7)_64%,_rgba(236,72,153,0.7))]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 my-11">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Your MovieVerse Account
        </h2>

        <form onSubmit={handelsignup}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="yourname"
              placeholder="Your Name"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black"
            />
          </div>

          {/* Password with toggle */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter a secure password"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-sm text-gray-600 focus:outline-none"
            >
              {showPassword ? <BiHide size={20}/> : <BiShow size={20}/>}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button onClick={hendelgoogle} className="w-full py-3 border text-black flex items-center justify-center rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Redirect to Login */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
   </>
  );
};

export default Signup;
