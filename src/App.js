import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import './card.style.scss';

function App() {
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

  console.log(countries);

  return (
    <div className="App">
      <h1>Countries APP</h1>
      <ul>
        {countries.map((country) => {
          return (
            <div key={country.altSpellings}>
              <div className="card-container">
                <img className="card-flag" alt="flag" src={country.flags.png} />
                <div className="card-description">
                  <h3 className="card-title">{country.name.common}</h3>
                  <p>{country.capital}</p>
                  <p>{country.population}</p>
                </div>
              </div>
            </div>
          )
        })}
        
      </ul>
    </div>
  );
}

export default App;
