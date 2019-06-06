import React from 'react';
import './Filters.css';

const Filters = () => (
  <div className="Filters-row">
    <select onChange={(event) => console.log(event.target.value)}>
      <option value="All Products">All Products</option>
    </select>
  </div>
);

export default Filters;
