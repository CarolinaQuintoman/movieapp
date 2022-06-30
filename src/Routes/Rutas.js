import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import MovieDetailCont from "../components/MovieDetail/MovieDetailCont";
import MovieListConteiner from "../components/MovieListConteiner/MovieListConteiner";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<MovieListConteiner />} />
            <Route path='/detail/:id' element={<MovieDetailCont/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas
