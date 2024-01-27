import React, { useState, useEffect } from 'react';
import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleSearch = async () => {
    try {
      // Fetch data from Strapi based on search parameters
      const response = await fetchProducts({
        vin: searchTerm,
        price: price,
        name: model,
        year: year,
      });

      // Pass the search results to the parent component or function
      onSearch(response);
    } catch (error) {
      console.error('Error fetching Strapi data:', error);
    }
  };

  // Simulate fetching data from Strapi
  const fetchProducts = async (searchParams) => {
    // Replace this with your actual Strapi API endpoint
    const apiUrl = `https://your-strapi-api-url/products?_where=${JSON.stringify(
      searchParams
    )}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  };

  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos="fade-up" className="title">
          Which vehicle are you looking for?
        </h3>

        <div className="searchDiv grid">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            data-aos="fade-up"
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            data-aos="fade-up"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            data-aos="fade-up"
            className="btn primaryBtn flex"
            onClick={handleSearch}
          >
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
