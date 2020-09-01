import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_CART = {
  items =[],
  price = 0,
}

export default function cartReducer(state = INITIAL_CART, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      return state;
    case CLEAR_CART:
      return state;
  }
}