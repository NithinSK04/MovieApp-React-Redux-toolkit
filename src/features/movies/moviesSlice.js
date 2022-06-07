import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

//fetch movies on the store side
//?Step :1
//middleware thunk
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

//fetching the shows
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=series`
    );
    return response.data;
  }
);

//fetch the show/Movie Details
export const fetchShowsAndMovies = createAsyncThunk(
  "movies/fetchShowsAndMovies",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

//TODO:define the initial state first
const initialState = {
  movies: [],
  shows: [],
  selectedMovies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  //to save the moviees
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovies = {};
    },
  },
  //?step2:
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("successfully");
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },

    //fetching the shows
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },

    //fetchiing the details of shows and movies
    [fetchShowsAndMovies.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovies: payload };
    },
  },
});

//exporting the action and reducer
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
//fetching the detail from store
export const getAllMoviews = (state) => state.moviesAndShows.movies;
//fetch all shows
export const getAllShows = (state) => state.moviesAndShows.shows;
//fetch the show and tv details
export const getShowsAndMovieInfo = (state) =>
  state.moviesAndShows.selectedMovies;
export default movieSlice.reducer;
