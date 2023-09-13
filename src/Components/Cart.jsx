import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './cartContext'; 

const Cart = () => {
  const { cartCount } = useCart(); 

  return (
    <div>
      <span className='cartLogo'>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span className="cartText">
        Cart
      </span>
      {cartCount > 0 && ( 
        <span id="cartContainer" className='cartContainer'>
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default Cart;