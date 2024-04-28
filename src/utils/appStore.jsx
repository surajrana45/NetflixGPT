import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from './movieSlice'
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        GPT:gptSlice
    }
})

export default appStore