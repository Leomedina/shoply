import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../reducers/actions';

function CartItem({ cartId, name, price }) {
  const dispatch = useDispatch();

  const handleDelBtn = () => {
    dispatch(removeFromCart(cartId, price))
  };

  return (
    <div className="CartItem">
      <h1>{name}</h1>
      <button onClick={handleDelBtn}>X</button>
    </div>
  )
}

export default CartItem;