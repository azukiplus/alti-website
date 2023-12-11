import React from "react";
import { Image, Button, Stack, Container, Row, Col } from "react-bootstrap";
import CarouselComp from "../carousel";
import "../css/home.css";

const HomePage = () => {
  //const [flowertext, setFlowertext] = useState("If you were describing the image above to a blind person, what would you say?");

  // const flowerClick = () => {
  //   flowertext === "If you were describing the image above to a blind person, what would you say?" ? setFlowertext("Vibrant blue hydrangea blossoms with purple towards the center of the flowers. The flowers' delicate petals are clustered together.") : setFlowertext("If you were describing the image above to a blind person, what would you say?");
  // };

  return (
    <>
      <div className='image-container' id='main'>
        <Image
          src={"img/mountain.jpg"}
          title='Source: Vecteezy'
          alt='A large, snowy mountain with snowy hilltops in the distance. The sky is a colorful purple and blue with stars illuminating it.'
          fluid
        />
        <Stack className='overlay-text-and-button'>
          <div>
            <h1 className='overlay-text'>
              Generate alt text for images on Discord with the
              power of A.I.
            </h1>
          </div>
          <div>
            <Button
              className='overlay-button'
              type='submit'
              href='https://discord.com/oauth2/authorize?scope=bot&client_id=1178510218003492915'
              target='_blank'
              rel='noreferrer'
            >
              Add to Discord
            </Button>
          </div>
        </Stack>
      </div>
      <Container>
        <div className='jumbotron jumbotron-fluid mt-3 pb-3 ' id='main'>
          <h2>Background</h2>
        </div>
      </Container>

      <div >
        <Row style={{ marginRight: 0, marginLeft: 0 }}>
          <Col sm={8}>
            <Container className='p-4 example-img-container'>
              <Image
                src={"img/flowers.jpg"}
                alt='Vibrant blue hydrangea blossoms with delicate, pale purple towards the center of the flowers.'
                className='layer-parent'
                fluid
              />
              <p>If you were describing the image above to a blind person, what would you say?</p>
              {/* <Button
                type='checkbox'
                className='flower-button'
                onClick={flowerClick}
              >
                {flowertext}
              </Button> */}
            </Container>
          </Col>
          <Col sm={4}>
            <section className='me-3 pe-3'>
              <h3>About alt text</h3>
              <h4>What is alt text?</h4>
              <p>
                Alt text, shortened from the term alternative
                text, is text that gets read out loud by screen
                readers. Screen readers are used by people who
                are blind or have low vision to navigate the
                web. Alt text is used to describe images, so
                that people who are blind or have low vision can
                understand what the image is about.
              </p>
              <h4>Good alt text v.s. bad alt text</h4>
              <p>
                Good alt text describes the image in as much
                detail as a user who is not blind or has low
                vision can understand. Bad alt text is either
                too vague or too specific.
              </p>
              <ul>
                <li>
                  Good alt text: "Vibrant blue hydrangea blossoms with purple towards the center of the flowers. The flowers' delicate petals are clustered together."
                </li>
                <li>Bad alt text: "Flowers"</li>
              </ul>
            </section>
          </Col>
        </Row>
        <CarouselComp />

        <section id='about-alti' className='p-3'>
          <Container>
            <div className='jumbotron jumbotron-fluid mt-3 pb-3 pt-4'>
              <h2 className='display-4'>About alti</h2>
            </div>
          </Container>
          <Row
            className='pt-4'
            style={{ marginRight: 0, marginLeft: 0 }}
          >
            <Col sm={4}>
              <section>
                <h3 className='pt-3 pb-3 ms-3 ps-3'>
                  What is alti?
                </h3>
                <p className='pt-3 pb-3 ms-3 ps-3'>
                  Alti is a Discord bot developed by a team of
                  students at the{" "}
                  <a
                    href='https://www.washington.edu/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    University of Washington, Seattle
                  </a>
                  . Once you add Alti to your Discord server,
                  whenever someone sends an image, Alti will
                  automatically generate alt text for the
                  image using Artificial Intelligence. It then
                  sends the alt text into the server as a
                  message. Discord has a built-in way to add
                  alt text to an image, but that requires the
                  uploader to use the feature, which not
                  everyone does. Alti makes it so that any
                  image can be more accessible for users who
                  are low vision or are blind.
                </p>
              </section>
            </Col>
            <Col sm={8}>
              <Container className='p-4 example-img-container'>
                <Image
                  src={"img/alti.png"}
                  alt='The Alti logo. A futuristic silver, cat-like creature with large blue eyes holding the text "A, I, L, T, I" with the "I" representing the "I" in artificial intelligence.'
                  fluid
                />
              </Container>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default HomePage;
