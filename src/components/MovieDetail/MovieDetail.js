import React from "react";


const MovieDetail = ({movie}) => {

   console.log(movie.poster_path);
  return (
    <>
      <div className="card">
        <h1>??????</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} className="card-img-top" alt={movie.title} />
        <div className="card-body">
            <h1>{movie.title} </h1>
          <p className="card-text">
            {movie.overview}
          </p>
          <p>{movie.vote_average}</p>
        </div>
        
      </div>
    </>
  );
};

export default MovieDetail;
