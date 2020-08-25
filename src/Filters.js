// IMPORTS -----------------------------------
import React from 'react';
import styled from 'styled-components';

// COMPONENT -----------------------------------
const Filters = () => (
  <Row>
    <select onChange={(event) => console.log(event.target.value)}>
      <option value="All Products">All Products</option>
    </select>
  </Row>
);

// STYLING -----------------------------------
const Row = styled.div `
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

// EXPORTS -----------------------------------
export default Filters;
