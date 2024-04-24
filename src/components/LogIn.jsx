import React, { useState, useRef } from "react";
import Header from "./Header";
import bgImage from "../assets/background.jpg";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate()
  const [isLogIn, setIsLogIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validateData(email.current.value, password.current.value);
    // email.current.value = "";
    // password.current.value = "";
    setErrorMessage(message);
    if (message) return;

    // sign in sign up

    if (!isLogIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleForm = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img src={bgImage} />
      </div>
      <form className="absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-3xl p-4">
          {isLogIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone Number"
          className="m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md"
        />
        <button
          onClick={handleButtonClick}
          className="m-3 p-2 bg-red-700 w-full rounded-md"
        >
          {isLogIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-3 p-1 text-red-700 text-lg">{errorMessage}</p>
        <p className="p-4 cursor-pointer" onClick={toggleForm}>
          {isLogIn
            ? "New to NetFlix? Sign In Now"
            : "Already registered! LogIn"}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
