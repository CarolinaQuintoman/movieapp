import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ResultsCard from "../ResultsCard/ResultsCard";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <>
      <NavBar />
      <div className="add-page">
        <div className="container">
          <div className="row">
            <div className="input-wrapper" style={{ margin: "25px 0 0 500px" }}>
              <input
                type="text"
                placeholder="Search"
                value={query || ""}
                onChange={onChange}
                results={results}
                style={{ marginBottom: "100px" }}
              />
            </div>
            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id} style={{ listStyleType: "none" }}>
                    <ResultsCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
