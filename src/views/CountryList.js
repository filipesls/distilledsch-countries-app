import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/card';

import '../card.style.scss';

const CountryList = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( response => {
        // handle success
        setCountries(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[]);

  const countriesList = countries.map((country) =>
    <Card key={country.name.common} country={country} />
  );

  return (
    <div className="App">
      <h1>Countries APP</h1>
      {countriesList}
    </div>
  );
}

export default CountryList;
