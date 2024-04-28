import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({path}) => {
    // console.log(path)
  return (
    <div className='w-52 h-24 px-1'>
      <img src={IMG_CDN_URL+path} alt='movieImg'/>
    </div>
  )
}

export default MovieCard
