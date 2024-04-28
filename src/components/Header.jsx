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
import { toggleGPTSearchView } from "../utils/gptSlice";


const Header = () => {

  const showGPTSearch = useSelector(store=>store.GPT.showGPTSearch)

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

  const handleGPTSearch=()=>{

    dispatch(toggleGPTSearchView())
  }

  return (
    <div className="absolute bg-gradient-to-b from-black  p-2 z-10 flex justify-between w-full">
      <div>
        <img src={logo} className="h-[50px] w-[200px] ml-32" />
      </div>

     {user && <div className="flex">
      <button className="m-2 p-2 bg-purple-800 text-white font-serif rounded-sm" onClick={handleGPTSearch}>{showGPTSearch ?'Home Page':'GPT Search'}</button>
        <img src={userImg} className="h-[50px] w-[50px] mx-5 cursor-pointer" />
        <button
          onClick={handleSignOut}
          className="bg-red-600 m-2 p-2 font-serif rounded-sm text-white"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
