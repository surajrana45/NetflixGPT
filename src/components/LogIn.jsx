import React, { useState } from 'react'
import Header from './Header'
import bgImage from '../assets/background.jpg'

const LogIn = () => {

    const [isLogIn,setIsLogIn] = useState(true)

    const toggleForm=()=>{
        setIsLogIn(!isLogIn)
    }


  return (
    <div className='bg-gradient-to-b from-black'>
      <Header/>
      <div className='absolute'>
        <img src={bgImage}/>
      </div>
      <form className='absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white rounded-lg'>
        <h1 className='font-bold text-3xl p-4'>{isLogIn ? 'Sign In':'Sign Up'}</h1>
        {!isLogIn &&<input type='text' placeholder='Enter your name' className='m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md' />}
        <input type='email' placeholder='Email or Phone Number' className='m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md' />
        <input type='password' placeholder='Enter password' className='m-3 p-4 w-full bg-gray-800 bg-opacity-70 rounded-md'/>
        <button className='m-3 p-2 bg-red-700 w-full rounded-md'>{isLogIn ? 'Sign In':'Sign Up'}</button>
        <p className='p-4 cursor-pointer' onClick={toggleForm}>{isLogIn ?'New to NetFlix? Sign In Now':'Already registered! LogIn'}</p>
      </form>
    </div>
  )
}

export default LogIn
