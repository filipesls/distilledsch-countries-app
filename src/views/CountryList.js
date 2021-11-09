import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import Card from '../components/card';
import { getCountryList } from '../api/api';

import '../card.style.scss';

const CountryList = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {

    (async () => {
      const countrriesData = await getCountryList()
      setCountries(countrriesData.data)
    })()

  },[]);

  const countriesList = countries.map((country) =>
    <Card key={country.name.common} country={country} />
  );

  return (
    <div className="App">
      <Header />
      <div className="card-list-container">
        {countriesList}
      </div>
    </div>
  );
}

export default CountryList;
