import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className="w-screen px-10 m-4">
      <h1 className="text-3xl font-light font-serif text-white my-3">{title}</h1>

      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
