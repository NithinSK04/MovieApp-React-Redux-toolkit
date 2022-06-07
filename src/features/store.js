import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/moviesSlice";

//export const getAllMoviews = (state) => state.movies.movies;
//fetches the data From here
export const store = configureStore({
  reducer: {
    moviesAndShows: movieReducer,
  },
});
