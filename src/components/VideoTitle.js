import React from "react"
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux"


const VideoTitle = ({title, overview}) => {

 const languagekey = useSelector(store=> store.config.lang)

  return (
    <div className=' mt-3 md:w-screen aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className=' mt-12 text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div className="mt-6 md:mt-0">
        <button className='px-8 text-lg bg-white text-black md:py-3 md:px-9 font-bold md:text-xl rounded-md hover:bg-opacity-70'>{lang[languagekey].play}</button>
        <button className='mx-2 px-3 text-lg md:mx-2 bg-gray-400 text-black md:py-3 md:px-6 font-bold md:text-xl bg-opacity-50 rounded-md hover:bg-opacity-60'>{lang[languagekey].moreInfo}</button>
      </div>
    </div>
  )
}

export default VideoTitle;
