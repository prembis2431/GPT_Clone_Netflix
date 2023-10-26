import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        trailerVideo : null,
        trendingVideos : null,
        topRatedMovies : null
    },

    reducers : {

        addNowPlayingMovies : (state, action) =>{

            state.nowPlayingMovies = action.payload
        },

        addTrailervideo : (state, action) =>{

            state.trailerVideo = action.payload
        },

        addTrendingNowVideos : (state, action) =>{

            state.trendingVideos = action.payload
        },

        addTopRatedMovies : (state, action) =>{

            state.topRatedMovies = action.payload
        },


    }

});

export const { addNowPlayingMovies, addTrailervideo, addTrendingNowVideos, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;