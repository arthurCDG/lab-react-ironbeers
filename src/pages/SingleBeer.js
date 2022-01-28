import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = () => {
  const [beer, setOneBeer] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((dbResponse) => setOneBeer(dbResponse.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <img src={beer.image} alt={beer.name} />
      <div>
        <h2>{beer.name}</h2>
        <span>{beer.attenuation_level}</span>
      </div>
      <div>
        <h3>{beer.tagline}</h3>
        <span>{beer.first_brewed}</span>
      </div>
      <p>{beer.description}</p>
      <h5>{beer.contributed_by}</h5>
    </div>
  );
};

export default SingleBeer;
