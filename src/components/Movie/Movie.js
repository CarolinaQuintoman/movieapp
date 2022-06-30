import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, title, poster_path, vote_average }) => (
  <>
    <div className="movie">
      <div className="movie-info">
        <div>
          <NavLink to={`/detail/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path} `}
              alt={title}
            />
            </NavLink>
            <div>
              <h3>{title}</h3>
              <div>
                <span className="movie-vote">{vote_average}</span>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </>
);

export default Movie;
