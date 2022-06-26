import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, title, poster_path, vote_average }) => (
  <>
    <div className="movie">
      <div className="container">
        <div className="row">
          <NavLink to={`/detail/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path} `}
              alt={title}
            />
            <div className="movie-info">
              <h3>{title}</h3>
              <div>
                <span>{vote_average}</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  </>
);

export default Movie;
