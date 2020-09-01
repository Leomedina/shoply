import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector(store => (store.cart), shallowEqual);
  return (
    <div className="Cart">
      <div className="header">
        <h1><span role="img" aria-label="shopping-cart">🛒</span></h1>
        <p> total: ${cart.price} | Item: {cart.items.length}</p>
      </div>
      <h1>
        {cart.items.length > 0 ? "Items in cart" : "no items in cart"}
      </h1>
    </div>
  )
};

export default Cart;