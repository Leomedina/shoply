import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import Product from './Product'
import "../styles/Inventory.css"

function Inventory() {
  const products = useSelector(store => (store.inventory), shallowEqual);
  return (
    <div className="Inventory">
      {products.map(({ id, name, price, description, image_url }) =>
        <Product
          name={name}
          price={price}
          description={description}
          image_url={image_url}
          key={id}
        />)}
    </div>
  )
}

export default Inventory;