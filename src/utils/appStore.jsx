import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from './movieSlice'

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice
    }
})

export default appStore