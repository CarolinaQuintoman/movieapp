import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./MovieDetailCont.css";
import { getMovies } from "./../../services/moviesService";

//const discover = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

const MovieDetailCont = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  
  const movie = movies.find((mov) => mov.id === Number(id));
    
  useEffect(() => {
    getMovies().then((moviesResponse) => {
      setMovies(moviesResponse);
    })
  }, []);

  

  //const [ movie, setMovie] = useState([]);

  return (
    <>
      <div className="movie-conteiner">
        {movie ? 
        <MovieDetail 
        movie={movie}
        {...movie}
        /> : <h1>Cargando...</h1>}
      </div>
      
    </>
  );
};

export default MovieDetailCont;
