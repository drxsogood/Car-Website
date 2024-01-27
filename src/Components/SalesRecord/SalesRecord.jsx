import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SalesRecord.scss';

const SalesRecord = () => {
  const [salesRecords, setSalesRecords] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchAllSalesRecords = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/salesrecords?populate=*');

        if (response.data && response.data.data) {
          console.log('Sales Records Data:', response.data.data);
          setSalesRecords(response.data.data);
        } else {
          console.error('Failed to fetch sales records');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message || 'Unknown error');
      }
    };

    fetchAllSalesRecords();
  }, []);

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    setSelectedDealer(null); // Reset dealer filter when brand filter is applied
    setStartDate('');
    setEndDate('');
  };

  const handleDealerFilter = (dealer) => {
    setSelectedDealer(dealer);
    setSelectedBrand(null); // Reset brand filter when dealer filter is applied
    setStartDate('');
    setEndDate('');
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setSelectedBrand(null); // Reset brand filter when start date is selected
    setSelectedDealer(null); // Reset dealer filter when start date is selected
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setSelectedBrand(null); // Reset brand filter when end date is selected
    setSelectedDealer(null); // Reset dealer filter when end date is selected
  };

  const handleDateRangeFilter = () => {
    // Filter sales records based on the selected date range
    const filteredSalesRecords = salesRecords.filter((record) => {
      const recordDate = new Date(record.attributes.dsold);
      const startDateObj = startDate ? new Date(startDate) : null;
      const endDateObj = endDate ? new Date(endDate) : null;

      return (
        (!startDateObj || recordDate >= startDateObj) &&
        (!endDateObj || recordDate <= endDateObj)
      );
    });

    // Use the filtered sales records for rendering
    setSalesRecords(filteredSalesRecords);
  };

  const resetFilters = async () => {
    // Reset all filters and fetch all sales records again
    setSelectedBrand(null);
    setSelectedDealer(null);
    setStartDate('');
    setEndDate('');
    await fetchAllSalesRecords();
  };

  const dealerNames = [
    'Bobby Lawrence',
    'Angelo Leonard',
    'Trent Rondeau',
    'Andrew Stewart',
    'Brendan Legare',
    'Rayhan Jackson'
  ];

  return (
    <div className="sales-records-container">
      <div className="filter-dropdowns">
        {/* Brand Filter Dropdown */}
        <label htmlFor="brandFilter">Brand:</label>
        <select
          id="brandFilter"
          value={selectedBrand || ''}
          onChange={(e) => handleBrandFilter(e.target.value)}
        >
          <option value="">Select Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>

        {/* Dealer Filter Dropdown */}
        <label htmlFor="dealerFilter">Sold by:</label>
        <select
          id="dealerFilter"
          value={selectedDealer || ''}
          onChange={(e) => handleDealerFilter(e.target.value)}
        >
          <option value="">Select Dealer</option>
          {dealerNames.map((dealer) => (
            <option key={dealer} value={dealer}>
              {dealer}
            </option>
          ))}
        </select>

        {/* Start Date Filter */}
        <label htmlFor="startDateFilter">Start Date:</label>
        <input
          type="date"
          id="startDateFilter"
          value={startDate}
          onChange={handleStartDateChange}
        />

        {/* End Date Filter */}
        <label htmlFor="endDateFilter">End Date:</label>
        <input
          type="date"
          id="endDateFilter"
          value={endDate}
          onChange={handleEndDateChange}
        />

        {/* Filter Buttons */}
        <button onClick={handleBrandFilter}>Filter by Brand</button>
        <button onClick={handleDealerFilter}>Filter by Dealer</button>
        <button onClick={handleDateRangeFilter}>Filter by Date Range</button>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>

      {salesRecords.length > 0 ? (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Color</th>
              <th>Date Sold</th>
              <th>Financial Option</th>
              <th>Customer Address</th>
              <th>Total Price</th>
              <th>Sold by</th>
            </tr>
          </thead>
          <tbody>
            {salesRecords.map((salesrecord) => (
              <tr key={salesrecord.id}>
                <td>{salesrecord.attributes.vin}</td>
                <td>{salesrecord.attributes.brand}</td>
                <td>{salesrecord.attributes.model}</td>
                <td>{salesrecord.attributes.color}</td>
                <td>{salesrecord.attributes.dsold}</td>
                <td>{salesrecord.attributes.foption}</td>
                <td>{salesrecord.attributes.Caddress}</td>
                <td>{salesrecord.attributes.tprice}</td>
                <td>{salesrecord.attributes.soldby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No records found.</div>
      )}
    </div>
  );
};

export default SalesRecord;
