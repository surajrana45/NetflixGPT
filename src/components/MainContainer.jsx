import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies===null)return
    const movieTrailer = movies.results[0]
    const {title,overview,id} = movieTrailer

    // console.log(title, id)

  return (
    <div>
      <VideoBackground movieId={id}/>
      <VideoTitle overview={overview} title={title}/>
    </div>
  )
}

export default MainContainer
