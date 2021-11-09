import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( country ) => {
  const countryData = country.country;

  return (
    <Link to={`/${countryData.name.common}`} className="link" params={country} state={country}>
      <fieldset className="card-container">
        <legend>Country</legend>
        <img className="card-flag" alt="flag" src={countryData.flags.png} />
        <h3 className="card-title">{countryData.name.common}</h3>
        <span>Capital: {countryData.capital}</span>
        <p>Population: {countryData.population}</p>
      </fieldset>
    </Link>
  );
};

export default Card;