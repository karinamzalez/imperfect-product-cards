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
  display: flex;
  flex-wrap: wrap;`

// EXPORTS -----------------------------------
export default Products;
