import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BeerLogo from "./../assets/beer.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="image is-32x32">
          <img src={BeerLogo} alt="beer-logo" />
        </div>
      </div>
      <div className="navbar-item">
        <Link className="icon" to={"/"} element={<HomePage />}>
          <i className="fas fa-home is-large"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
