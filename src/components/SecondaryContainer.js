import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies);

  const languageSel = useSelector(store=> store.config.lang);
  

  return (

    movies && (
    <div className='bg-black'>

      <div className=' mt-0 md:-mt-44 pl-4 md:pl-12 pr-4 md:pr-12 relative z-20'> 
      
      <MovieList title={lang[languageSel].nowPlaying} movies= {movies.nowPlayingMovies}/>
      <MovieList title={lang[languageSel].trendingNow} movies= {movies.trendingVideos}/>
      <MovieList title={lang[languageSel].topRated} movies= {movies.topRatedMovies}/>
      </div>

      {/*    
          Movie Lists - Popular, Trending, Now Playing
           - Movie cards * n
      */}

    </div>
    )
  )
}

export default SecondaryContainer
