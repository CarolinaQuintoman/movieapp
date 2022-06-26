import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";

const discover = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

const MovieListConteiner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(discover);
  }, []);
  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      });
  };

  return (
    <>
      <div className="movie-container">
        <div class="container">
          <div class="row row-cols-3">
            <div class="col">
              {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListConteiner;
