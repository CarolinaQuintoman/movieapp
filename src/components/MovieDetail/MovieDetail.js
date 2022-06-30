import React from "react";
// import { useParams } from 'react-router-dom'
// import { useEffect,useState } from "react";
// import { getMovie } from "../../services/moviesService";



const MovieDetail = ({movie}) => {

   
  return (
    <>
      <div className="card">
        <h1>??????</h1>
        <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
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
