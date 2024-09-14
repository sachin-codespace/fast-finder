import React from "react";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.length > 0 ? (
        countries.map((country, index) => (
          <div key={index} className="country-item">
            <h2>{country.country}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>
              Language(s):{" "}
              {Array.isArray(country.official_language)
                ? country.official_language.join(", ")
                : country.official_language}
            </p>
            <p>Currency: {country.currency}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default CountryList;
