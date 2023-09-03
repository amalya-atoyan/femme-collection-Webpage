import React from 'react';
import './Card.css';

const Card = (props) => {
  const { src, price, price2 } = props;

  return (
    <div className='card'>
      <img src={src} className='cardImage' alt='Jewelry' />
      <h3>Gold - {price} AMD</h3>
      <h3>Silver - {price2} AMD</h3>
    </div>
  );
};

export default Card;
