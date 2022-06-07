import React from "react";
import { useSelector } from "react-redux";
import { getAllMoviews, getAllShows } from "../../features/movies/moviesSlice";
import MovieCard from "../MovieCard/index";
import "./MovieListing.scss";

const ErrorComponent = ({ movies }) => {
  return (
    <div className="movies-error">
      <h1>{movies.Error}</h1>
    </div>
  );
};

function MovieListing() {
  //Fetching the all movie details
  const movies = useSelector(getAllMoviews);
  const shows = useSelector(getAllShows);
  // const shows = useSelector();
  const { Search, Response } = movies;

  return (
    <>
      <div className="move-wrapper">
        <div className="movie-list">
          <div className="show-listing">
            <h2>Movies</h2>
          </div>
          <div>
            {
              Response ? (
                <div className="movie-container">
                  {Search.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              ) : null
              // <ErrorComponent movies={Response} />
            }
          </div>
          <div className="show-listing">
            <h2>Shows</h2>
          </div>
          <div>
            {
              Response ? (
                <div className="movie-container">
                  {shows.Search?.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              ) : null
              // <ErrorComponent movies={Response} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieListing;
