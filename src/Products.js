import React from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className="Products-grid">
      {products.map(product => <Product key={product.variantId} product={product} />)}
    </div>
  );
};

export default Products;
