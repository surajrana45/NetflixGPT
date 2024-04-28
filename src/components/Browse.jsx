import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowplayingMovies();
  const showGPT = useSelector((store) => store.GPT.showGPTSearch);

  return (
    <div>
      <Header />
      {showGPT ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
