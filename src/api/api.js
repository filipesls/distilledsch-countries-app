import axios from 'axios';

export const getCountryList = async () => {
  try {
    const CountriesData = await axios.get(`https://restcountries.com/v3.1/all`);
    return CountriesData;
    // console.log('getCountryList', CountriesData);
  } catch (error) {
    console.error(error);
  }
} 

export const getCountryByName = async (countryName) => {
  try {
    const CountryData = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    // console.log('getCountryByName', CountryData);
    return CountryData;
  } catch (error) {
    console.error(error);
  }
} 

export const getCountryByCode = async (countryCode) => {
  try {
    const CountryCodeData = await axios.get(`https://restcountries.com/v3.1/alpha?codes=null,${countryCode}`);
    // console.log('countryCode', countryCode);
    // console.log('CountryCodeData', CountryCodeData);
    return CountryCodeData.data.filter(x => x.cca3 === countryCode);
  } catch (error) {
    console.error(error);
  }
} 
