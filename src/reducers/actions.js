/**
 * 
 *  Actions for Inventory 
 * 
 */

import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addToCart = (name, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      cartId: uuidv4(),
      name,
      price,
    }
  };
};

export const removeFromCart = (cartId, price) => {
  console.log(cartId, price)
  return {
    type: REMOVE_FROM_CART,
    payload: {
      cartId,
      price
    }
  };
};