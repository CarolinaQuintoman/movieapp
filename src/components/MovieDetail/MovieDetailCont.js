import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail'
import './MovieDetailCont.css';

const MovieDetailCont = () => {
    const {id} = useParams();    
    const [ movie, setMovie] = useState(null);
    
    const filtrar = movie.find((mov) => mov.id === Number (id))
    console.log(filtrar)
  
    useEffect(() => { 
      const promesa = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(filtrar)
      }, 2000);
      });
  
      promesa
      .then((res) =>{
        setMovie(res)    //le estoy cambiando el estado
      })
      .then(() => console.log(movie))
      .catch((err) => console.log (err));
    
    }, [movie,filtrar]);
  
    return (
      <div className='movie-conteiner'>
        {movie ? <MovieDetail movie={movie}/> : <h1>Cargando...</h1>  }
      </div>
    )
}

export default MovieDetailCont