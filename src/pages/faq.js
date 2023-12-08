import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../css/faq.css";

const Faq = () => {
    return (
        <div className='p-3 about mt-5 mb-5'>
            <Container>
                <div className='jumbotron jumbotron-fluid mt-3 pb-3'>
                    <h1 className="faq">Frequently Asked Questions</h1>
                </div>
            </Container>
            <div className='container-fluid mt-5'>
                <Accordion defaultActiveKey='0' className="">
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                            How much does Alti cost?
                        </Accordion.Header>
                        <Accordion.Body>
                            Alti is free to use for general users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            Does Alti collect user data?
                        </Accordion.Header>
                        <Accordion.Body>
                            Alti does not collect or store user data. However, we do need permissions to read your Discord server's messages and send messages in order to add alt text to images.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>
                            I can't add Alti for some reason. What am I doing wrong?
                        </Accordion.Header>
                        <Accordion.Body>
                            Make sure you have the Manage Server permission in the Discord server you're trying to add Alti to. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                            Why do we need alt text?
                        </Accordion.Header>
                        <Accordion.Body>
                            Alternative text is important for blind or low vision users who use screen readers to interact with the web. Although Discord allows us to add alt text to images, good alt text is rare to find!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
