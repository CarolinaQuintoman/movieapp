import React from "react";
import { NavLink } from "react-router-dom";

const Movie = ({ id, title, poster_path, vote_average }) => (
  <>
    <div className="conteiner">
      <div className="row">
        <NavLink to={`/detail/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path} `}
            alt={title}
          />

          <h3>{title}</h3>
          <div>
            <span>{vote_average}</span>
          </div>
        </NavLink>
      </div>
    </div>
  </>
);

export default Movie;
