import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{

    // Fetch data from TMDB API and update the store

  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies);

  console.log(nowPlayingMovies);
  const getNowPlayingMovies = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results))
  
};

useEffect(()=>{

  // if(!nowPlayingMovies) or we can write it as-
  !nowPlayingMovies && getNowPlayingMovies(); // memoization concept to prevent API calling everytime
  // the component loads, i.e., saves from lot of unrequired
  // API calls.

},[])

}

export default useNowPlayingMovies;