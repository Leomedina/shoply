import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actionTypes';

const INITIAL_STATE = { items: [], price: 0 }

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        price: state.price += action.payload.price
      };
    case REMOVE_FROM_CART:
      return state;
    case CLEAR_CART:
      return state;
    default:
      return state;
  };
};