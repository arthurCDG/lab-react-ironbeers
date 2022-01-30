import React from "react";
import { Link } from "react-router-dom";

import allBeersImage from "./../assets/beers.png";
import newBeerImage from "./../assets/new-beer.png";
import randomBeerImage from "./../assets/random-beer.png";

const HomePage = () => {
  return (
    <main>
      <h1>IronBeer</h1>
      <Link to={"/beers"}>
        <img src={allBeersImage} alt="all-beers" />
        <h3>All beers</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sed
          unde quidem qui perspiciatis eaque nesciunt, reiciendis facere
          recusandae minima.
        </p>
      </Link>
      <Link to={"/random"}>
        <img src={newBeerImage} alt="random-beer" />
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sed
          unde quidem qui perspiciatis eaque nesciunt, reiciendis facere
          recusandae minima.
        </p>
      </Link>
      <Link to={"/new-beer"}>
        <img src={randomBeerImage} alt="new-beer" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sed
          unde quidem qui perspiciatis eaque nesciunt, reiciendis facere
          recusandae minima.
        </p>
      </Link>
    </main>
  );
};

export default HomePage;
