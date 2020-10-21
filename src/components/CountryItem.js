import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ country }) => {
  const { name, flag, capital, population } = country;

  return (
    <div className="card mt-1" style={{ height: "100%" }}>
      <div className="card-header">
        <Link to={`/country/${name}`}>{name}</Link>
      </div>

      <div className="card-body}">
        <img
          alt=""
          className="mt-1"
          style={{ width: "50%", height: "auto" }}
          src={`${flag}`}
        />
        <h3>{`Capital: ${capital}`}</h3>
        <p>{`Population: ${population}`}</p>
      </div>
    </div>
  );
};

export default CountryItem;
