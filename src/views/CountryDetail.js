import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByName } from '../api/api';

import Header from '../components/header';
import CountryBorder from '../components/countryBorder';

const CountryDetail = () => {
  const params = useParams();
  const countryName = params.name;
  const [ country, setCountry ] = useState();
  let languages = null;
  let currencies = null;
  let borders = null;

  useEffect(() => {

    (async () => {
      const countryData = await getCountryByName(countryName)
      setCountry(countryData.data[0]);
    })()

  },[]);

  if (country) {
    const languagesArray = Object.values(country?.languages);
    languages = languagesArray.map((_value) => `${_value}, `);

    const currenciesArray = Object.keys(country?.currencies);
    currencies = currenciesArray.map((_key) => `${_key}, `);

    const bordersArray = country?.borders;
    if (bordersArray) {
      borders = bordersArray.map((_border) => 
        <CountryBorder key={_border} cca3={_border} />
      );
    }
  }

  return (
    <div className="App">
      <Header backBtn />
      <img className="" alt="flag" src={country?.flags.svg} />
      <div>
        <p>{country?.name.common}</p>
        <p>Capital: {country?.capital}</p>
        <p>Population: {country?.population}</p>
        <p>Currency: {currencies}</p>
        <p>Languages: {languages}</p>
      </div>
      {borders && <h3>Bodering Countries</h3>}
      {borders}
    </div>
  )}

export default CountryDetail;