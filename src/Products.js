import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
      <Product product={products[0]} />
    </div>
  );
};

export default Products;
