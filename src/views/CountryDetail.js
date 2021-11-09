import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams, Link } from 'react-router-dom';

const CountryDetail = () => {
  const location = useLocation();
  const params = useParams();
  const countryName = params.name;
  const [ country, setCountry ] = useState();

  useEffect(() => {
    !country && axios
      .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then( response => {
        // handle success
        setCountry(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[]);

  return (
    <>
    <div className="App">
      <h1>Countries APP</h1>
      <Link to="/">Back</Link>
      <hr />
      <img className="" alt="flag" src={country?.flags.svg} />
      <p>{country?.name.common}</p>
      <p>Capital: </p>
      <p>Population: </p>
      <p>Currency: </p>
      <p>Languages: </p>
      <h3>Bodering Countries</h3>
      {/* <img className="card-flag" alt="flag" src={`https://flagcdn.com/${country?.borders[0]}.svg`} /> */}
    </div>
    </>
  )}

export default CountryDetail;