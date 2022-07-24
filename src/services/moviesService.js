const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

function getMovies() {
  return fetch(moviesUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
}



function getRating() {
  return fetch(moviesUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results.vote_average;
    });
}
    

export {
  getMovies,
  getRating
};
