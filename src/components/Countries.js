import React, { useContext, useEffect } from "react";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import CountryContext from "../context/country/CountryContext";

function Countries() {
  useEffect(() => {
    document.querySelector("title").innerText = `Country Finder | Home`;
  });
  const countryContext = useContext(CountryContext);
  const { loading, countries } = countryContext;
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        <div className="row ">
          {countries.map((count) => (
            <div
              key={count.numericCode}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
            >
              <CountryItem country={count} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Countries;
