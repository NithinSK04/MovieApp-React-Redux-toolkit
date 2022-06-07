import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card-component">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="inner-card">
          <div className="top-portion">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="bottom-portion">
            <div className="card-info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
