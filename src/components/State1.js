import React, { useContext, useEffect } from "react";
import State from "./State";
import Spinner from "./Spinner";
import CountryContext from "../context/country/CountryContext";

function State1({ match }) {
  const countryContext = useContext(CountryContext);
  const { loading, getCountry } = countryContext;
  useEffect(() => {
    document.querySelector(
      "title"
    ).innerText = `Country Finder | ${match.params.name}`;

    getCountry(match.params.name);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return <State />;
  }
}

export default State1;
