import React from "react";
import CountryContext from "../context/country/CountryContext";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { useContext } from "react";

function State() {
  const countryContext = useContext(CountryContext);

  const {
    name,
    area,
    capital,
    currencies,
    flag,
    population,
    region,
    timezones,
    topLevelDomain,
    latlng,
    nativeName,
    callingCodes,
  } = countryContext.country[0];
  const lat = latlng[0];
  const lng = latlng[1];

  let position = { lat: lat, lng: lng };

  return (
    <div className="container mb-3 text-center">
      <div className="row align-items-center mt-3">
        <div className="col-sm-6 col-xs-12 mt-3">
          <div className="card ">
            <h3>{name}</h3>
            <img style={{ width: "100%" }} src={flag} alt="" />
            <h5 className="mt-2">
              <strong>Capital: </strong>
              {capital}
            </h5>
            <h5 className="mt-2">
              <strong>Population: </strong>
              {population}
            </h5>
            <h5 className="mt-2">
              <strong>Area: </strong>
              {area}
            </h5>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12 mt-3">
          <div className="card " style={{ width: "100%", height: "400px" }}>
            <div className="qwert">
              <Map
                google={window.google}
                initialCenter={position}
                zoom={5}
              ></Map>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 col-xs-12">
            <table className="table table-bordered table-striped table-hover">
              <tbody>
                <tr className="thead-dark">
                  <th>Info</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Continent</td>
                  <td>{region}</td>
                </tr>
                <tr>
                  <td>Domain</td>
                  <td>{topLevelDomain}</td>
                </tr>
                <tr>
                  <td>Native Name</td>
                  <td>{nativeName}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 col-xs-12">
            <table className="table table-bordered table-striped table-hover">
              <tbody>
                <tr className="thead-dark">
                  <th>Info</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Time Zone</td>
                  <td>{timezones}</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{currencies[0].name}</td>
                </tr>
                <tr>
                  <td>Calling Codes</td>
                  <td>{callingCodes[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCpWxstLYuQy8MpkvME9AYV17Pz0MK44mc",
})(State);
