// IMPORTS -----------------------------------
import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import products from './products.json';
import Filters from './Filters';

// COMPONENT -----------------------------------
const App = () => (
  <>
    <Row>
      <Filters />
    </Row>
    <Row>
      <Products products={products} />
    </Row>
  </>
);

// STYLING -----------------------------------
const Row = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  margin: 36px;
`;

// EXPORTS -----------------------------------
export default App;
