import React from 'react'

const ResultsCard = ({movie}) => {
  return (
    <>
    <div>
        {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={`${movie.title} Poster`} />
        ) : (
            <div className="filler-poster"></div>
        )}
    </div>
    <div>
         <h3>{movie.title}</h3>       
    </div>
    </>
  )
}

export default ResultsCard