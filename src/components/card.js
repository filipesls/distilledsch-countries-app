import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( country ) => {
  const countryData = country.country;

  return (
    <>
    <Link to={`/${countryData.name.common}`} className="link" params={country} state={country}>
      <div className="card-container">
        <img className="card-flag" alt="flag" src={countryData.flags.png} />
        <div className="card-description">
          <h3 className="card-title">{countryData.name.common}</h3>
          <p>{countryData.capital}</p>
          <p>{countryData.population}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Card;