import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addTrailervideo} from "../utils/MovieSlice"


const useMovieTrailer = (movieId) =>{
const dispatch = useDispatch();

const trailerVideo = useSelector(store=> store.movies.trailerVideo)

  const getMovieVideos = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
  const json = await data.json();
  

  const filterData = json.results.filter((video)=> video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];
  
  dispatch(addTrailervideo(trailer))

  }

  useEffect(()=>{

    !trailerVideo && getMovieVideos();  // memoization concept to prevent API calling everytime
                                        // the component loads, i.e., saves from lot of unrequired
                                        // API calls.


  },[])

}

export default useMovieTrailer;