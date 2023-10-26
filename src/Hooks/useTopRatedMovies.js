import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/MovieSlice";


const useTopRatedMovies = () =>{

    const dispatch = useDispatch();
     // Fetch data from TMDB API and update the store

     const topRatedMovies = useSelector(store=> store.movies.topRatedMovies);

     const getTopRatedMovies= async () =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
      

        dispatch(addTopRatedMovies(json.results));
     }

     useEffect(() =>{

        !topRatedMovies && getTopRatedMovies(); // memoization concept to prevent API calling everytime
        // the component loads, i.e., saves from lot of unrequired
        // API calls.
        
     }, [])

}

export default useTopRatedMovies;