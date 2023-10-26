import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import moviesReducer from "./MovieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";

const AppStore= configureStore(

    {

        reducer: {
            
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer, // adding reducer to the app store created in configSlice
        }
    }
)

export default AppStore;