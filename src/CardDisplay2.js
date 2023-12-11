import ImageCard from "./card"
import { Accordion, Row } from 'react-bootstrap';

function CardDisplay2() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header as="h6">Alt text uses location as context</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ImageCard cardSrc="/img/carddisplay/statacenter.png" cardTitle="Stata Center" cardTextAzure="a person standing in a park with buildings in the background" cardTextGPT="A person stands smiling at night with the unique architecture of MIT's Stata Center in the background." />
                        <ImageCard cardSrc="/img/carddisplay/mit.png" cardTitle="People at MIT" cardTextAzure="a group of people standing in front of a building" cardTextGPT="A person poses with outstretched arms in front of the Massachusetts Institute of Technology at night, creating the illusion of multiple arms with friends hidden behind." />
                        <ImageCard cardSrc="/img/carddisplay/rocket.png" cardTitle="Rocket museum" cardTextAzure="a group of people standing in a building" cardTextGPT="Visitors explore a massive rocket on display at a space museum." />
                        <ImageCard cardSrc="/img/carddisplay/mars.png" cardTitle="Mars helicopter" cardTextAzure="a helicopter on the ground" cardTextGPT="A small helicopter prepares for a test flight on the dusty surface of Mars." />
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header as="h6">Alt text is accurate even with ambiguous/tricky pictures</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ImageCard cardSrc="/img/carddisplay/tomatocushion.jpg" cardTitle="Tomato cushion" cardTextAzure="a tomato pillow in a car" cardTextGPT="A cushion shaped like a slice of tomato sits on a car seat, adding a quirky touch to the ride." />
                        <ImageCard cardSrc="/img/carddisplay/rojiice.jpg" cardTitle="Roji ice cream" cardTextAzure="a plate of food on a tray" cardTextGPT="A dessert made to look like a monster, with eyes and teeth, ready to eat." />
                        <ImageCard cardSrc="/img/carddisplay/computer.jpg" cardTitle="Computer parts" cardTextAzure="a close up of a computer part" cardTextGPT="A close-up view of the inside of a computer, focusing on a dusty graphics card." />
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header as="h6">Memes can be captioned</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ImageCard cardSrc="/img/carddisplay/cart.png" cardTitle="Cart ratings" cardTextAzure="several shopping carts with yellow stars" cardTextGPT="A humorous take on shopping carts rated like video game characters for their speed, strength, and agility." />
                        <ImageCard cardSrc="/img/carddisplay/cathair.jpg" cardTitle="Cat haircut" cardTextAzure="a collage of a cat" cardTextGPT="A cat with a funny haircut looks like it got into mischief after being warned not to." />
                        <ImageCard cardSrc="/img/carddisplay/frogmeme.webp" cardTitle="Frog spacing out" cardTextAzure="a close up of a frog" cardTextGPT="A frog looks spaced out as if it's lost in thought and not paying attention to the conversation." />
                        <ImageCard cardSrc="/img/carddisplay/ffxiv.png" cardTitle="Playing FFXIV" cardTextAzure="a person sitting in a chair" cardTextGPT="Man reclining happily after 10 hours of gaming, but looking exhausted from just 1 hour of online class." />
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header as="h6">OpenAI creates better alt text than Azure</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ImageCard cardSrc="/img/carddisplay/zelda.png" cardTitle="Zelda screenshot" cardTextAzure="a screenshot of a video game" cardTextGPT="A player in a video game is about to be hit by a large, floating rock." />
                        <ImageCard cardSrc="/img/carddisplay/pokemoncards.png" cardTitle="Pokemon cards" cardTextAzure="a group of cards on a table" cardTextGPT="A collection of Pokémon cards laid out on a desk, including character and energy cards." />
                        <ImageCard cardSrc="/img/carddisplay/porkchop.png" cardTitle="Pork chop" cardTextAzure="a plate of food on a table" cardTextGPT="A massive grilled pork chop served with seasoned rice, draped with a Puerto Rican flag." />
                        <ImageCard cardSrc="/img/carddisplay/worndown.jpg" cardTitle="Old house" cardTextAzure="a room with a bed and a mirror" cardTextGPT="A cozy but worn-down room with a flickering light bulb and old furniture." />
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header as="h6">Azure creates better alt text than OpenAI</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ImageCard cardSrc="/img/carddisplay/magnets.png" cardTitle="University magnets" cardTextAzure="a group of magnets on a white wall" cardTextGPT="A collection of prestigious university logos alongside a postcard displayed on a wall." />
                        <ImageCard cardSrc="img/carddisplay/huskycat.jpg" cardTitle="Husky cat" cardTextAzure="a group of dogs and a cat on a couch" cardTextGPT="A cat in a shark costume sits between two huskies on a sofa, looking like part of the pack." />
                        <ImageCard cardSrc="img/carddisplay/lemon.png" cardTitle="Lemon peels" cardTextAzure="lemon peels on a counter" cardTextGPT="When life gives you lemons, some assembly may be required." />
                        <ImageCard cardSrc="img/carddisplay/balcony.jpg" cardTitle="Balcony" cardTextAzure="a building with a balcony" cardTextGPT="A person in a red shirt stands on a sunny balcony above a garage door." />
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default CardDisplay2;