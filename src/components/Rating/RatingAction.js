import React from 'react';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../../services/moviesService';
import { useState, useEffect } from 'react';


const RaitingAction = () => {
  
  const [rating, setRating] = useState('');

  useEffect(()=>{
    getMovies()
    .then(setRating);
  }, [])

  

  return (
    <>
      <NavBar />
      <ul>
        { rating.map((getMovies) =>(
          <li key={getMovies.vote_average}>
            {getMovies.vote_average}
          </li>
        ))}
      
      </ul>
    </>
  );
};

export default RaitingAction