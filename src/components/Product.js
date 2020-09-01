import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/actions';

function Product({ name, price, description, image_url }) {
  const dispatch = useDispatch();

  const handleBtn = () => dispatch(addToCart(name, price));

  return (
    <div className="Product" style={{ backgroundImage: `url(${image_url})` }} >
      <h1>{name}</h1>
      <button onClick={handleBtn}>Add to Cart</button>
    </div>
  )
};

export default Product;