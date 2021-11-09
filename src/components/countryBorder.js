import React from 'react';
import { useState, useEffect } from 'react';
import { getCountryByCode } from '../api/api';

const CountryBorder = ( cca3 ) => {
  const countryData = cca3.cca3;
  const [ countryBorder, setCountryBorder ] = useState();

  useEffect(() => {

    (async () => {
      const countryBorderData = await getCountryByCode(countryData)
      setCountryBorder(countryBorderData[0]);
    })()

  },[]);

  console.log(countryBorder);

  return (
    <div className="">
      <div className="card-container">
        <img className="card-flag" alt="flag" src={countryBorder?.flags?.svg} />
        <h3 className="card-title">{countryBorder?.name?.common}</h3>
        <span>Capital: {countryBorder?.capital}</span>
      </div>
    </div>
  );
};

export default CountryBorder;