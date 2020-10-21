import React, { useState, useContext } from "react";
import CountryContext from "../../context/country/CountryContext";

const Search = () => {
  const countryContext = useContext(CountryContext);
  const [searchValue, setsearchValue] = useState(null);

  const onChange = (e) => {
    setsearchValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== null) {
      countryContext.searchCountry(searchValue);
    } else {
      alert("nklzdnklcdnkl");
    }

    document.querySelector(".form-control").value = null;
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search country"
        className="form-control mt-3"
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-block btn-outline-dark mt-3 mb-3"
      />
    </form>
  );
};

export default Search;
