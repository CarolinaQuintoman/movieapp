const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=3fbda5301468ff1bd3d4ffb99d0fa76f&language=en-US&sort_by=popularity.desc&page=1`;

const getMovies = async (endpoint)=>{
  const data = await (await fetch(endpoint)).json()
  return data.results
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
