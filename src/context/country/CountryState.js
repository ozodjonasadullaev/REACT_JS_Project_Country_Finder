import React, { useReducer } from "react";
import axios from "axios";
import CountryContext from "./CountryContext";
import CountryReducer from "./CountryReducer";
import { SEARCH_COUNTRY, GET_COUNTRY, SET_LOADING } from "../Types";

const CountryState = (props) => {
  const initialstate = {
    countries: [],
    loading: null,
    country: [],
  };
  const [state, dispatch] = useReducer(CountryReducer, initialstate);

  //Search countries
  const searchCountry = async (searchValue) => {
    setLoading();
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${searchValue}`
    );
    dispatch({
      type: SEARCH_COUNTRY,
      payload: res.data,
    });
  };

  //Get Single Countries

  const getCountry = async (count) => {
    setLoading();
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${count}`
    );
    dispatch({
      type: GET_COUNTRY,
      payload: res.data,
    });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        country: state.country,
        searchCountry,
        getCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
