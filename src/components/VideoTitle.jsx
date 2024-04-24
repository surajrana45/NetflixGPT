import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video  absolute top-0 pt-60 px-12 bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-3 w-1/4 text-white'>{overview}</p>
      <div className=''>
        <button className='p-3 mr-3 bg-white border border-black w-[150px] font-bold rounded-lg hover:bg-opacity-20'> ▶ Play</button>
        <button className='p-3 mr-3 bg-gray-500 bg-opacity-50 border border-black w-[150px] font-bold rounded-lg text-white hover:bg-opacity-20'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
