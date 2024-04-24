
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

function useNowplayingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    const nowPlayingMovies = async () => {
      const movies = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await movies.json();
      // console.log(json);
      dispatch(addNowPlayingMovies(json));
    };

    nowPlayingMovies();
  }, []);
}

export default useNowplayingMovies;
