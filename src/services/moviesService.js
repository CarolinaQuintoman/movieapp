const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

function getMovies() {
  return fetch(moviesUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
}
//const movieUrl =`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US`

function getMovie() { //(movieId)
    return fetch(moviesUrl)
        .then((res) => res.json())
        .then((data) => data.results)
        .then((id) =>{
            return id
        })
}
console.log(getMovie);
    

export {
  getMovies,
  getMovie,
};
