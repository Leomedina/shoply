import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector(store => (store.cart), shallowEqual);
  return (
    <div className="Cart">
      <h1 className="header">🛒</h1>
      <h1>
        {cart.items.length > 0 ? "Items in cart" : "no items in cart"}
      </h1>
    </div>
  )
};

export default Cart;