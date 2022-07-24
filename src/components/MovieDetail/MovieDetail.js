import React from "react";

const MovieDetail = ({ movie }) => {
  
  return (
    <>
      <div className="cardDetail">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
          className="card-img-top"
          alt={movie.title}
          style={{ width: '18rem',margin:'20px 0 5px 20px' }}
        />
        <div className="card-body">
          <h1>{movie.title} </h1>
          <p className="card-text">{movie.overview}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
