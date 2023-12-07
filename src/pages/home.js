import React, { useState } from "react";
import { Image, Button, Stack, Container, Row, Col } from "react-bootstrap";
import CarouselComp from "../carousel";
import "../css/home.css";

const HomePage = () => {
    const [buntext, setBuntext] = useState("?");
    const [meattext, setMeattext] = useState("?");
    const [vegtext, setVegtext] = useState("?");
    const [bagtext, setBagtext] = useState("?");

    const bunClick = () => {
        buntext === "?"
            ? setBuntext("A light brown, toasted hamburger bun.")
            : setBuntext("?");
    };

    const meatClick = () => {
        meattext === "?"
            ? setMeattext("A hamburger patty with grill marks.")
            : setMeattext("?");
    };

    const vegClick = () => {
        vegtext === "?"
            ? setVegtext(
                  "A set of green lettuce leaves, a red tomato slice, and purple sliced onions."
              )
            : setVegtext("?");
    };

    const bagClick = () => {
        bagtext === "?" ? setBagtext("A brown paper bag.") : setBagtext("?");
    };

    return (
        <>
            <div className='image-container'>
                <Image
                    src={"img/vecteezy_desert_landscape.jpg"}
                    title='Source: Vecteezy'
                    alt='Desert landscape with a moon illuminating part of the sand.'
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
                    <h2 className='display-4'>Background</h2>
                </div>
            </Container>

            <div >
                <Row style={{ marginRight: 0, marginLeft: 0 }}>
                    <Col sm={8}>
                        <Container className='p-4 example-img-container'>
                            <Image
                                src={"img/burger.jpg"}
                                alt='burger'
                                className='layer-parent'
                                fluid
                            />
                            <Button
                                type='checkbox'
                                className='layer-bun circular-btn'
                                onClick={bunClick}
                            >
                                {buntext}
                            </Button>
                            <Button
                                type='checkbox'
                                className='layer-meat circular-btn'
                                onClick={meatClick}
                            >
                                {meattext}
                            </Button>
                            <Button
                                type='checkbox'
                                className='layer-vegetables circular-btn'
                                onClick={vegClick}
                            >
                                {vegtext}
                            </Button>
                            <Button
                                type='checkbox'
                                className='layer-bag circular-btn'
                                onClick={bagClick}
                            >
                                {bagtext}
                            </Button>
                            <p className='img-caption pt-4'>
                                Click on the question marks for examples of alt
                                text that describe that particular part of the
                                image.
                            </p>
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
                                    Good alt text: "A lightly toasted burger bun
                                    with lettuce, purple onion slices, a tomato
                                    slice, and a grilled patty inside it. The
                                    burger is in a paper bag."
                                </li>
                                <li>Bad alt text: "A burger"</li>
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
                            <section className='ms-3 ps-3'>
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
                                    src={"img/uw.jpg"}
                                    alt='A large brick building at the University of Washington. The building has many rectangular windows and has a castle-like structure.'
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
