import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/actions';
import { useHistory } from 'react-router-dom';

function Product({ id, name, price, image_url }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCartBtn = () => dispatch(addToCart(name, price));
  const handleProductBtn = () => {
    history.push(`/inventory/${id}`)
  };

  return (
    <div
      className="Product"
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <h1>{name}</h1>
      <button onClick={handleCartBtn}>Add to Cart</button>
      <button onClick={handleProductBtn}>Product Page</button>
    </div>
  )
};

export default Product;