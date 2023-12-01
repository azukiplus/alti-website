import React from 'react';
import Image from 'react-bootstrap/Image';
import CarouselComp from '../carousel';

const HomePage = () => {
  return (
    <>
      <Image src={'img/vecteezy_desert_landscape.jpg'} alt="Desert landscape with a moon" fluid/>
      <div>
        <h1>Generate alt text for images on Discord with the power of A.I.</h1>
      </div>
      <CarouselComp />
    </>
  );
};

export default HomePage;