// IMPORTS -----------------------------------
import React from 'react';
import styled from 'styled-components';
import Product from './Product';

// COMPONENT -----------------------------------
const Products = ({ products }) => {
  return (
    <Grid>
      {products.map(product => <Product key={product.variantId} product={product} />)}
    </Grid>
  );
};

// STYLING -----------------------------------
const Grid = styled.div`
  display: grid;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

// EXPORTS -----------------------------------
export default Products;
