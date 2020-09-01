import React from 'react';
import './styles/App.css';
import Inventory from './components/Inventory.js'
import Cart from './components/Cart.js'

function App() {
  return (
    <div className="App">
      <Cart />
      <Inventory />
    </div>
  );
}

export default App;
