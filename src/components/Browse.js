import Header from './Header';
import SecondaryContainer from './SecondaryContainer';
import  useNowPlayingMovies  from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import useTrendingNowMovies from '../Hooks/useTrendingNowMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTrendingNowMovies();
  useTopRatedMovies();
  

  return (
    <div>
      <Header/>

      {showGptSearch ? ( <GptSearchPage/>) : ( 
      <>
      <MainContainer/>                 {/* This part is really important, cos when we click 
                                            */}
      <SecondaryContainer/> 
      </> 
      // we had to use <> </> react fragment again here cos we are writing a jsx and only one parent component is allowed 
      )}
      
     
   
      
     
    </div>  
  )
}


export default Browse;
