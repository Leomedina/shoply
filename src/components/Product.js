import React from 'react';

function Product({ name, price, description, image_url }) {
  return (
    <div className="Product" style={{ backgroundImage: `url(${image_url})` }} >
      <h1>{name}</h1>
      <button>Add to Cart</button>
    </div>
  )
};

export default Product;