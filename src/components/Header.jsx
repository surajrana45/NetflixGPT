import React from 'react'
import logo from '../assets/Netflix_2015_logo.svg'

const Header = () => {
  return (
    <div className='absolute ml-32 mt-3 p-2 z-10' >
      <img src={logo} className='h-[50px] w-[200px]'/>
    </div>
  )
}

export default Header
