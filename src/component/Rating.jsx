import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (starIndex) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (starIndex) => {
    setRating(starIndex);
  };

  return (
    <div className='flex items-center'>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;

        return (
          <label key={index}>
            <FaStar
              className="star"
              color={"#FFD703"}
              onMouseOver={() => handleMouseOver(starValue)}
              onMouseLeave={handleMouseLeave}
            />
          </label>
        );
      })}
      {/* <p>{rating} out of {totalStars} stars</p> */}
    </div>
  );
};

export default StarRating;
