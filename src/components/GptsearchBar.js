import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptsearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    
    // Make an API call to GPT  API and get Movie Results

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current.value}.Only provide me names of 7 movies, comma separated like the example result given ahead. Example Result: Karawan, Equalizer 3, Community, Forrest Gump, Saving Private Ryan, Django, Sudhu Tomari Jonno"; // we are basically giving GPT API a little for better results, cos GPT is dumb initially.`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // if (!gptResults.choices) {
      navigate("/error");
    // }

   
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
    // gptResults.choices?.[0]?.message.content - this will provide the output as we prompted to openAI
    // it will provide output in comma separated ways like - Don, Forrest Gump, Community, etc.
    // but the split function will take that string and convert it into an array. Like this- [ "Don", "Forrest Gump", "Community", ...]

    // For each movie there would be a result from TMDB API movie database
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    // this concept is important cos we are applying a loop method to a asynchronous function
    // i.e., we are mapping it. so what would be the result? i.e., what will be the mapped array?

    const tmdbResults = await Promise.all(promiseArray);
    

    // we will get an array of promises as output, cos searchMovieTmdb() will take some time
    // to fetch data from the API, but the map() will not wait for searchMovieTmdb() for the results
    // cos time tide and Javascript waits for none, i.e., it is an asynchronous operation.
    // so its will only return an array of promises instead of fulfilled results. [promise, promise, ...]

    // so to get the results-

    // we use a promise.all() and we are awaiting for the Promise.all() to finish
    // so, it will go through all the promises in the array and only gets finished
    // after resolving all the promises.

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    ); // we are using {...}

    // cos we are passing to data into a single action
  };

  return (
    <div className="pt-[35%] mx-auto md:pt-[17%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        {" "}
        {/* It will help preventing the page to reload */}
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 px-4 m-2 py-2 bg-red-700 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
