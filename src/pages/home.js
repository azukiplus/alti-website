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
        <Row style={{ marginRight: 0, marginLeft: 0 }}>
          <Col sm={8}>
            <Container className='p-4 example-img-container'>
              <Image src={'img/burger.jpg'} alt="burger" fluid />
            </Container>
          </Col>
          <Col sm={4}>
            <section className="me-3 pe-3">
              <h3 className="pt-3 pb-3">What is alt text?</h3>
              <p className="pt-3 pb-3">
                Alt text, shortened from the term alternative text, is text that gets read out loud by screen readers. Screen readers are used by people who are blind or have low vision to navigate the web. Alt text is used to describe images, so that people who are blind or have low vision can understand what the image is about.
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <section className="ms-3 ps-3">
              <h3 className="pt-3 pb-3 ms-3 ps-3">About alti</h3>
              <p className="pt-3 pb-3 ms-3 ps-3">
                Alti is a Discord bot developed by a team of students at the University of Washington, Seattle. Once you add Alti to your server, whenever someone sends an image, Alti will automatically generate alt text for the image using Artificial Intelligence. It then sends the alt text into the server as a message. Discord has a built-in way to add alt text to an image, but that requires the uploader to use the feature, which not everyone does. Alti makes it so that any image can be more accessible for users who are low vision or are blind.
              </p>
            </section>

          </Col>
          <Col sm={8}>
            <Container className='p-4 example-img-container'>
              <Image src={'img/burger.jpg'} alt="burger" fluid />
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;