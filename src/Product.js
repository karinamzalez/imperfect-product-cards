// IMPORTS -----------------------------------
import React from 'react';
import styled from 'styled-components';

const toImageUrl = (product) =>
  `//res.cloudinary.com/imperfect/image/upload/w_400,h_260,c_pad,b_auto,d_products:no-image-found.png/${product.imageFilename}`;

// COMPONENT -----------------------------------
const Product = ({ product }) => {
  return (
    <Card>
      <div>
        <img
          src={toImageUrl(product)}
          alt={product.name}
        />
      </div>
      <div>
        {product.name}
      </div>
      <div>
        ${product.price} | {product.packageUnitAmount} {product.packageUnitFormatted}
      </div>
    </Card>
  );
};

// STYLING -----------------------------------
const Card = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  margin: 36px;
  width: 20%;
  
  * {
    overflow: hidden;
  }
`


// EXPORTS -----------------------------------
export default Product;
