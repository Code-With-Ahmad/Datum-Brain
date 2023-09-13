import React, { useState, useEffect } from 'react';
import '../CSS/Items.css';
import StarRating from './StartRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Components/cartContext';

const Items = (props) => {
  const { cartCount, incrementCartCount } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCartClick = () => {
    try {
      
      const existingCartData = JSON.parse(localStorage.getItem('cart')) || [];

   
      const newItem = {
        title: props.title,
        price: props.price,
        description: props.description,
        category: props.category,
        image: props.image,
        rating: props.rating,
      };

   
      existingCartData.push(newItem);

      
      localStorage.setItem('cart', JSON.stringify(existingCartData));

      
      setIsAddedToCart(true);

     
      incrementCartCount();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  
  useEffect(() => {
    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer) {
      cartContainer.textContent = cartCount.toString();
    }
  }, [cartCount]);

  return (
    <div>
      <div className={`product-container`}>
        <img src={props.image} alt={props.description} className='img-fluid' title={props.description} />
        <h6 className='text-left py-3'>{props.title}</h6>
        <h4 className='price-item'>${props.price}</h4>
        <StarRating rating={props.rating}></StarRating>
        <button className="add-to-cart-button" onClick={handleAddToCartClick}>
          <FontAwesomeIcon icon={faCartShopping} /> {isAddedToCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Items;
