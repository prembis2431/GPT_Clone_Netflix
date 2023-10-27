import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  const leftBtnHandle = () =>{

    
  }

    
  return (
    <div>
      
      <h1 className=" text-lg md:text-2xl py-6 text-white">{title}</h1>

      <div className=" flex">
      <button className="mBtn text-white" onClick={leftBtnHandle}>left</button>
      <button className="mBtn text-white">right</button>
     
      
      <div className="flex overflow-x-scroll container-snap overflow-y-hidden">
        <div className="flex">
          {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)} 
          {/*we need a lot of cards so map() is used
             and map() works with key-pair values */}
              
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieList;
