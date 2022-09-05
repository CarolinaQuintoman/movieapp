import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import MovieDetailCont from "../components/MovieDetail/MovieDetailCont";
import MovieListConteiner from "../components/MovieListConteiner/MovieListConteiner";
import Search from "../components/Search/Search";
import RaitingAction from "../components/Rating/RatingAction";
//import Rating from "../components/Rating/Rating";


const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<MovieListConteiner />} />
            <Route path='/detail/:id' element={<MovieDetailCont/>}/>
          </Route>
          <Route path='/search' element={<Search/>} />
          <Route path='/detail/:id' element={<MovieDetailCont/>}/>
          <Route path='/rating' element={< RaitingAction/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas
