import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";
import userImg from "../assets/user.jpg";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {


  const navigate = useNavigate()
  const user = useSelector(store=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black mt-3 p-2 z-10 flex justify-between w-full">
      <div>
        <img src={logo} className="h-[50px] w-[200px] ml-32" />
      </div>

     {user && <div className="flex">
        <img src={userImg} className="h-[50px] w-[50px] mx-5 cursor-pointer" />
        <button
          onClick={handleSignOut}
          className="p-3  bg-red-600 w-30 h-12 font-bold text-white"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
