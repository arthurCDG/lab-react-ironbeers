import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((dbResponse) => {
        console.log("Success, imported this beer", dbResponse);
        navigate("/beers");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form p-5">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="e.g Maximator"
            onClick={(evt) => setName(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Tagline</label>
        <div className="control">
          <input
            name="tagline"
            className="input"
            type="text"
            placeholder="e.g. Maxi intense"
            onClick={(evt) => setTagline(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            name="description"
            className="input"
            type="text"
            placeholder="e.g. Super strong"
            onClick={(evt) => setDescription(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">First brewed</label>
        <div className="control">
          <input
            name="first_brewed"
            className="input"
            type="text"
            placeholder="e.g. 1275"
            onClick={(evt) => setFirstBrewed(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Brewers tips</label>
        <div className="control">
          <input
            name="brewers_tips"
            className="input"
            type="text"
            placeholder="e.g. Don't ever brew Maximator if you wish to live"
            onClick={(evt) => setBrewersTips(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Attenuation level</label>
        <div className="control">
          <input
            name="attenuation_level"
            className="input"
            type="number"
            placeholder="e.g. 70"
            onClick={(evt) => setAttenuationLevel(evt.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Your name</label>
        <div className="control">
          <input
            name="contributed_by"
            className="input"
            type="text"
            placeholder="e.g. John doe"
            onClick={(evt) => setContributor(evt.target.value)}
          />
        </div>
      </div>

      <button className="button is-blue" onClick={(evt) => handleSubmit(evt)}>
        Add new
      </button>
    </div>
  );
};

export default NewBeer;
