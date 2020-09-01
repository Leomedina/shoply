import React from 'react';

function Product({ name, price, description, image_url }) {
  return (
    <h1>{name} {price}</h1>
  )
};

export default Product;