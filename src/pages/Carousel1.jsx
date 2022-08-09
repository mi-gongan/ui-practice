import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="favicon.ico" onDragStart={handleDragStart} role="presentation" alt='carousel'/>,
  <img src="favicon.ico" onDragStart={handleDragStart} role="presentation" alt='carousel'/>,
  <img src="favicon.ico" onDragStart={handleDragStart} role="presentation" alt='carousel'/>,
];

const Carousel1 = () => {

  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Carousel1