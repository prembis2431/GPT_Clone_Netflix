import React from "react";

import GptMovieSuggestions from "./GptMovieSuggestions";
import GptsearchBar from "./GptsearchBar.js";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>

    <div className="fixed -z-10 bg-gradient-to-b from-black opacity-100">
      <img
        className=" w-screen h-screen object-cover"
        src={BG_IMG}
        alt="background"
      />
      </div>
      <div className="md:p-0">
        <GptsearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
