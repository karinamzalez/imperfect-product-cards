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

// COMPONENT -----------------------------------
const App: React.FC = () => {
  // set funtional component state
  const { products, addProducts } = useProducts([]);

  useEffect(() => {
    // asynchronously fetch/set products
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:9001/products");
      addProducts(response.data);
      console.log("Products added!");
    }
    fetchProducts();
  }, [])

  return <>
    <Row>
      <Filters />
    </Row>
    <Row>
      <Products products={products} />
    </Row>
  </>
};

// STYLING -----------------------------------
const Row = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  margin: 36px;
`;

export default App;