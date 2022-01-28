// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleBeer from "./SingleBeer";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((dbResponse) => {
        setAllBeers(dbResponse.data);
        setLoading(!loading);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {allBeers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} element={<SingleBeer beer={beer} />}>
            <div>
              <figure>
                <img src={beer.image_url} alt={beer.name} />
              </figure>
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Beers;
