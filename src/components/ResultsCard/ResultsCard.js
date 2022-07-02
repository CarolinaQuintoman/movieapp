import React from "react";
import "./ResultCard.css";

const ResultsCard = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <div className="movie-info">
          {movie.poster_path ? (
            <img
              className="resultImg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <h3
            style={{
              margin: "0",
              padding: "1rem",
              color: "rgb(194, 194, 230)",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {movie.title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default ResultsCard;
