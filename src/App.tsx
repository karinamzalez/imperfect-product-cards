// IMPORTS -----------------------------------
/* libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
/* components */
import Filters from './Filters';
import Products from './Products';
/* custom hooks */ 
import useProducts from './customHooks/useProducts';
/* types */
import { CategoryName } from './types';

// COMPONENT -----------------------------------
const App: React.FC = () => {
  // set funtional component state
  const { products, addProducts } = useProducts([]);
  const [ filter, setFilter ] = useState<any>('All Products');

  function handleSelect(newFilter: CategoryName) {
    setFilter(newFilter);
  }

  useEffect(() => {
    // asynchronously fetch/set products
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:9001/products");
      addProducts(response.data);
      console.log("Products added!");
    }
    fetchProducts();
    // passing empty array to register effect callback only once
  }, [])

  return <>
    <Row>
      <Filters selectedFilter={filter} handleSelect={handleSelect} />
    </Row>
    <Row>
      <Products products={products} filter={filter} />
    </Row>
  </>
};

// STYLING -----------------------------------
const Row = styled.div`
  text-align: center;
  margin: 20px;
`;

export default App;