import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Rating = () => {
  const ratingStar = [1, 2, 3, 4, 5];
  

  const [starValue, setStarValue] = useState(null);
  

  return (
    <>
   
    <div className="card-body" style={{ color: "white", display:'flex', alignItems:'center', flexDirection:'column' }}>
      <div className="star">
         Rating :
        {ratingStar.map((star, i) => {
          const ratingValue = i + 1;
          return (
            <div style={{display:'contents'}}>
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
      <button type="button" class="btn btn-secondary" style={{ marginTop:'10px'}}>Buscar</button>
    </div>
    </>
  );
};

export default Rating;
