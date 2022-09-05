import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";


const Rating = ({ movie }) => {
  const ratingStar = [1, 2, 3, 4, 5];

  const [starValue, setStarValue] = useState();
  const [ movies , setMovies] = useState()
  //console.log(starValue);

  useEffect(() => {
    const getStarValue = async(value) =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3fbda5301468ff1bd3d4ffb99d0fa76f&vote_average.gte=${value}&page=1`)
      setMovies(data)
    }
   getStarValue(starValue)
  }, [starValue])
  console.log(movies);
  

  return (
    <>
      <div
        className="card-body"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="star">
          Rating :
          {ratingStar.map((star, i) => {
            const ratingValue = i + 1;
            return (
              <div style={{ display: "contents" }} key={ratingValue}>
                <input type="radio" style={{ display: "none" }} />
                <FontAwesomeIcon
                  style={{ cursor: "grab" }}
                  icon={faStar}
                  key={star}
                  // onMouseOver={() => setStarValue(ratingValue)}
                  color={ratingValue <= starValue ? "#ffff36" : "white"}
                  onClick={() => setStarValue(ratingValue)}
                />
              </div>
            );
          })}
        </div>
        {/* <NavLink
          to={`/rating/`}
          type="button"
          class="btn btn-secondary btn-sm"
          style={{
            marginTop: "10px",
            background: "#6c757d",
            borderRadius: "2px",
            textColor: "white",
          }}
        >
          Buscar
        </NavLink> */}
        
      </div>
        
        {/* <ul>
          {
            movies.map(({vote_average}) =>(
              <li key={vote_average}>
                
              </li>
            ))
          }
        </ul> */}
      
    </>
  );
};

export default Rating;
