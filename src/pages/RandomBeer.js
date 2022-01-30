import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((dbResponse) => {
        const randomIndex = Math.floor(Math.random() * dbResponse.data.length);
        setRandomBeer(dbResponse.data[randomIndex]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <div>
        <h2>{randomBeer.name}</h2>
        <span>{randomBeer.attenuation_level}</span>
      </div>
      <div>
        <h3>{randomBeer.tagline}</h3>
        <span>{randomBeer.first_brewed}</span>
      </div>
      <p>{randomBeer.description}</p>
      <h5>{randomBeer.contributed_by}</h5>
    </div>
  );
};

export default RandomBeer;
