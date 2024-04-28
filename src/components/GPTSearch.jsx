import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'
import bgImage from '../assets/background1.jpg'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bgImage} />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
