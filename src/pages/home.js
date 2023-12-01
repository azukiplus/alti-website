import React from 'react';
import { Image, Button, Stack } from 'react-bootstrap';
import CarouselComp from '../carousel';
import '../css/home.css';

const HomePage = () => {
  return (
    <>
      <div className="image-container">
        <Image src={'img/vecteezy_desert_landscape.jpg'} alt="Desert landscape with a moon" fluid />
        <Stack className='overlay-text-and-button'>
          <div>
            <h1 className='overlay-text'>Generate alt text for images on Discord with the power of A.I.</h1>
          </div>
          <div>
            <Button className='overlay-button' type='submit'>
              Add to Discord
            </Button>
          </div>
        </Stack>
      </div>
      <CarouselComp />
    </>
  );
};

export default HomePage;