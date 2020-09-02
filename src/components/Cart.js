import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/Cart.css";
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(store => (store.cart));
  return (
    <div className="Cart">
      <div className="header">
        <h1><span role="img" aria-label="shopping-cart">🛒</span></h1>
        <p> total: ${cart.price} | Items: {cart.items.length}</p>
      </div>
      <h1>
        {cart.items.length > 0 ? <></> : "No Items in cart"}
      </h1>
      <div className="inside-cart">
        {cart.items.map(({ cartId, name, price }) =>
          <CartItem
            key={cartId}
            cartId={cartId}
            price={price}
            name={name}
          />)}
      </div>
    </div >
  )
};

export default Cart;