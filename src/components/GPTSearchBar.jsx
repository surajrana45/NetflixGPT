import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[6%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today!"
        />
        <button className="bg-red-800 col-span-3 text-white p-4 m-4">Search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
