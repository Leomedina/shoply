import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import Product from './Product'
import "../styles/Inventory.css"
import { useHistory } from 'react-router-dom';

function Inventory() {
  const products = useSelector(store => (store.inventory), shallowEqual);
  const history = useHistory();
  const redirectToCart = () => {
    history.push('/cart');
  }
  return (
    <>
      <button onClick={redirectToCart}>View Cart</button>
      <div className="Inventory">
        {products.map(({ id, name, price, description, image_url }) =>
          <Product
            name={name}
            price={price}
            description={description}
            image_url={image_url}
            id={id}
            key={id}
          />)}
      </div>
    </>
  )
}

export default Inventory;