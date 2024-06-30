import React, { useState, useEffect } from 'react';

function CityForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  // Fetch countries data
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries data: ', error);
    }
  };

  // Fetch cities data based on selected country
  useEffect(() => {
    if (selectedCountry) {
      fetchCities();
    }
  }, [selectedCountry]);

  const fetchCities = async () => {
    try {
      const response = await fetch(`https://api.openaq.org/v1/cities?country=${selectedCountry}`);
      const data = await response.json();
      setCities(data.results);
    } catch (error) {
      console.error('Error fetching cities data: ', error);
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h2>City Form</h2>
      <div>
        <label htmlFor="country">Select a Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">Select a City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {cities.map(city => (
            <option key={city.city} value={city.city}>{city.city}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CityForm;
