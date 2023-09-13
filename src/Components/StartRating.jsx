import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import '../CSS/StarRating.css'

const StarRating = ({ rating }) => {
  const maxRating = 5; 


  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={solidStar} className="star filled" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={regularStar} className="star empty" />
      ))}
    </div>
  );
};

export default StarRating;