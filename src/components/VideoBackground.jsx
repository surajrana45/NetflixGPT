import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  //    if(!trailer) return
  
  useMovieTrailer(movieId)

  return (
    <div className="w-screen relative">
      <iframe
       className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/"+trailer?.key+"?si=TNoQ1JOHrfAvLvB8?&autoplay=1!&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
