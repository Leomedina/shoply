import INITIAL_STATE from './initialState';
import { REMOVE_FROM_INVENTORY } from './actionTypes'

export default function inventoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_FROM_INVENTORY:
      return state
    default:
      return state
  };
};