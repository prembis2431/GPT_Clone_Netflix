import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    
  return (
    <div>

      <h1 className=" text-lg md:text-2xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)} 
          {/*we need a lot of cards so map() is used
             and map() works with key-pair values */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
