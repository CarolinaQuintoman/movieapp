import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import MovieListConteiner from "../components/MovieListConteiner/MovieListConteiner";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<MovieListConteiner />} />
            <Route path='/detail/:id' element={<MovieDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas
