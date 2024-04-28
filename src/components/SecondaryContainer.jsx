import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies)

  return (
    <div className="w-screen bg-black pr-5">
      <div className="relative z-40 -mt-64">
        <MovieList title={"Now Playing"} movies={movies?.results} />
        <MovieList title={"Popular"} movies={movies?.results} />
        <MovieList title={"Horror"} movies={movies?.results} />
        <MovieList title={"Latest"} movies={movies?.results} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
