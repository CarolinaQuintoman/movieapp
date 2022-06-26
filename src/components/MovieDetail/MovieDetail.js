import React from "react";
//import { useParams } from 'react-router-dom'



const MovieDetail = ({ id, poster_path, title, overview, vote_average }) => {

    // const {id} = useParams()
    
  return (
    <>
      <div className="card">
        <h1>{id}</h1>
        <img src={poster_path} className="card-img-top" alt={title} />
        <div className="card-body">
            <h1>{title} </h1>
          <p className="card-text">
            {overview}
          </p>
          <p>{vote_average}</p>
        </div>
      
      </div>
    </>
  );
};

export default MovieDetail;
