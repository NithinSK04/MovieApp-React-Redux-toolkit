import React, { useEffect } from "react";
import MovieListing from "../MovieListing/index";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesSlice";

function Home() {
  //defining the store
  const movieText = "Harry";
  const dispatch = useDispatch();
  //fetching the movie details
  //fetch the movie data
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
