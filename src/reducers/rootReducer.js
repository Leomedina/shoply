import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import inventoryReducer from './inventoryReducer';

const rootReducer = combineReducers({ cart: cartReducer, inventory: inventoryReducer });

export default rootReducer;