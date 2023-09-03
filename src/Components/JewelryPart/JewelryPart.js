import React from 'react';
import './JewelryPart.css';
import Card from '../Cards/Card';
import IMAGES from '../../images';


function JewelryPart() {
  const prices = [
    {
      id: '1',
      src: IMAGES.jewelry1,
      price: 85000,
      price2: 30000,
    },
    {
      id: '2',
      src: IMAGES.jewelry2,
      price: 40000,
      price2: 10000,
    },
    {
      id: '3',
      src:IMAGES.jewelry3,
      price: 55000,
      price2: 23000,
    },
    {
      id: '4',
      src: IMAGES.jewelry4,
      price: 55000,
      price2: 23000,
    },
    {
      id: '5',
      src: IMAGES.jewelry5,
      price: 55000,
      price2: 23000,
    },
    {
      id: '6',
      src: IMAGES.jewelry6,
      price: 50000,
      price2: 23000,
    },
  ];

  return (
    <div className='sectionPartSix'>
        {
          prices.map((el) => (
              <Card key={el.id} src={el.src} price={el.price} price2={el.price2} />
          ))
        }
    </div>
  );
}

export default JewelryPart;
