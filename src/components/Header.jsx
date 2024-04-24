import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";
import userImg from "../assets/user.jpg";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate()
  const user = useSelector(store=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const demount = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
        // ...
      }
    });

    return  ()=> demount();

  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black  p-2 z-10 flex justify-between w-full">
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
