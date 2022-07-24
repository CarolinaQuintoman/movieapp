import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/quintoMov.png";
import Icons from "../Icons/Icons";
import Rating from "../Rating/Rating";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} style={{ maxWidth: "25%" }} alt="some value" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "white" }}
                >
                  Inicio
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Categoria
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Drama
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            {/* <NavLink to="/rating"> */}
              <Rating />
            {/* </NavLink> */}
            <NavLink
              to="/search"
              className="btn btn-outline-success"
              type="submit"
              style={{
                marginRigth: "30px",
                padding: "15px",
                color: "white",
                borderColor: "#213a5c",
              }}
            >
              <Icons />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
