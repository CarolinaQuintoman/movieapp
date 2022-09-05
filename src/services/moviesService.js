const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

function getMovies() {
  return fetch(moviesUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
}

const voteUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=1&include_adult=false&query`;


function getRating() {
  return fetch(voteUrl)
  .then((res) => res.json())
  .then((data) => {
    return 
  })
  
}
  

export {
  getMovies,
  getRating
};
