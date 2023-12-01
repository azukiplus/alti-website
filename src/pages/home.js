import React from 'react';
import { Image, Button, Stack, Container, Row, Col } from 'react-bootstrap';
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
      <Container>
        <div className="jumbotron jumbotron-fluid mt-3 pb-3">
          <h2 className="display-4">Images are all around us.</h2>
        </div>
      </Container>

      <div>
        <Row>
          <Col sm={8}>
            <Container className='p-4 example-img-container'>
              <Image src={'img/burger.jpg'} alt="burger" fluid />
            </Container>
          </Col>
          <Col sm={4}>
            <section className="mt-3 pb-3">
              <h3 className="pt-3 pb-3">What is alt text?</h3>
              <p className="pt-3 pb-3">
                so this is a description that i will add later
              </p>
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;