import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addTrendingNowVideos } from "../utils/MovieSlice";



const useTrendingNowMovies = () =>{

    const dispatch = useDispatch();
    // Fetch data from TMDB API and update the store

    const trendingNowMovies = useSelector(store=> store.movies.trendingNowMovies);

    const getTrendingNowMovies = async () =>{

       
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
       

        dispatch(addTrendingNowVideos(json.results));


    }

    useEffect(()=>{

        !trendingNowMovies && getTrendingNowMovies(); // memoization concept to prevent API calling everytime
        // the component loads, i.e., saves from lot of unrequired
        // API calls.

    }, [])
}

export default useTrendingNowMovies;
