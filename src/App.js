import React from 'react';
import { Routes, Route } from "react-router-dom";

import CountryList from './views/CountryList';
import CountryDetail from './views/CountryDetail.js';

import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path=":name" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
