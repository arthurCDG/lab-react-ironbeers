// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleBeer from "./SingleBeer";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + query)
      .then((dbResponse) => {
        setAllBeers(dbResponse.data);
        setLoading(!loading);
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div>
      <div className="p-5">
        <input
          placeholder="Look for a specific beer"
          type="text"
          className="input"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </div>
      {allBeers.map((beer) => {
        return (
          <Link
            to={`/beers/${beer._id}`}
            element={<SingleBeer />}
            key={beer._id}
          >
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
