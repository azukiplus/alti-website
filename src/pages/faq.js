import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../css/faq.css";

const Faq = () => {
    return (
        <div className='p-3 about mt-5 mb-5'>
            <Container>
                <div className='jumbotron jumbotron-fluid mt-3 pb-3' id='main'>
                    <h2 className='display-4'>Frequently Asked Questions</h2>
                </div>
            </Container>
            <div className='container-fluid mt-5'>
                <Accordion defaultActiveKey='0' className="">
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                            How much does Alti cost?
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Varius vel pharetra vel turpis
                            nunc. Tortor posuere ac ut consequat semper viverra.
                            Mauris a diam maecenas sed enim. Diam sollicitudin
                            tempor id eu. Aliquam eleifend mi in nulla posuere.
                            Fusce id velit ut tortor. Sed elementum tempus
                            egestas sed sed risus pretium quam. Ipsum faucibus
                            vitae aliquet nec ullamcorper sit amet risus nullam.
                            Non odio euismod lacinia at quis risus sed vulputate
                            odio. Dui sapien eget mi proin sed libero. Aliquet
                            sagittis id consectetur purus ut faucibus pulvinar
                            elementum integer. Non enim praesent elementum
                            facilisis leo. Nisl suscipit adipiscing bibendum
                            est.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            Does Alti collect user data?
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Varius vel pharetra vel turpis
                            nunc. Tortor posuere ac ut consequat semper viverra.
                            Mauris a diam maecenas sed enim. Diam sollicitudin
                            tempor id eu. Aliquam eleifend mi in nulla posuere.
                            Fusce id velit ut tortor. Sed elementum tempus
                            egestas sed sed risus pretium quam. Ipsum faucibus
                            vitae aliquet nec ullamcorper sit amet risus nullam.
                            Non odio euismod lacinia at quis risus sed vulputate
                            odio. Dui sapien eget mi proin sed libero. Aliquet
                            sagittis id consectetur purus ut faucibus pulvinar
                            elementum integer. Non enim praesent elementum
                            facilisis leo. Nisl suscipit adipiscing bibendum
                            est.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>
                            I can't add Alti for some reason. What am I doing
                            wrong?
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Varius vel pharetra vel turpis
                            nunc. Tortor posuere ac ut consequat semper viverra.
                            Mauris a diam maecenas sed enim. Diam sollicitudin
                            tempor id eu. Aliquam eleifend mi in nulla posuere.
                            Fusce id velit ut tortor. Sed elementum tempus
                            egestas sed sed risus pretium quam. Ipsum faucibus
                            vitae aliquet nec ullamcorper sit amet risus nullam.
                            Non odio euismod lacinia at quis risus sed vulputate
                            odio. Dui sapien eget mi proin sed libero. Aliquet
                            sagittis id consectetur purus ut faucibus pulvinar
                            elementum integer. Non enim praesent elementum
                            facilisis leo. Nisl suscipit adipiscing bibendum
                            est.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
