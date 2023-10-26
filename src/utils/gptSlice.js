import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },

  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload; // from action.payload we will get these two things
      // after extracting from action.payload we get movieNames and movieResults
      state.movieNames = movieNames;
      state.movieResults = movieResults; // putting multiple data in same actions
      // from GptSearchBar.js from the dispatched action we get movieNames and movieResults
      // as an object, here we extract it and we set the state of the both
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
