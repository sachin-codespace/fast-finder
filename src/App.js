import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import countryData from "./data/countries.json";
import "./App.css";

const App = () => {
  const [filteredCountries, setFilteredCountries] = useState(countryData);

  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const results = countryData.filter((country) =>
      country.country.toLowerCase().includes(searchQuery) ||
      country.capital.toLowerCase().includes(searchQuery)
    );
    setFilteredCountries(results);
  };

  return (
    <div className="App">
      <h1>Fast Finder Search Bar</h1>
      <SearchBar onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
