import React from "react";
import {Container, Col } from "react-bootstrap";
import "../css/about.css";

const About = () => {
    return (
        <div className='p-3 about mt-5 mb-5'>
            <Container>
                <div className='jumbotron jumbotron-fluid mt-3 pb-3' id='main'>
                    <h2 className='display-4'>About Alti</h2>
                </div>
            </Container>
            <Col sm={12}>
                <section className='mt-5'>
                    <h3>Why we need alt text</h3>
                    <p>
                        Alternative text is important for blind or low vision
                        users who use screen readers to interact with the web.
                        Although Discord allows us to add alt text to images,
                        good alt text is rare to find!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Varius vel pharetra vel turpis nunc.
                        Tortor posuere ac ut consequat semper viverra. Mauris a
                        diam maecenas sed enim. Diam sollicitudin tempor id eu.
                        Aliquam eleifend mi in nulla posuere. Fusce id velit ut
                        tortor. Sed elementum tempus egestas sed sed risus
                        pretium quam. Ipsum faucibus vitae aliquet nec
                        ullamcorper sit amet risus nullam. Non odio euismod
                        lacinia at quis risus sed vulputate odio. Dui sapien
                        eget mi proin sed libero. Aliquet sagittis id
                        consectetur purus ut faucibus pulvinar elementum
                        integer. Non enim praesent elementum facilisis leo. Nisl
                        suscipit adipiscing bibendum est.
                    </p>
                </section>
                <section className='mt-5'>
                    <h3>How Alti Works</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Varius vel pharetra vel turpis nunc.
                        Tortor posuere ac ut consequat semper viverra. Mauris a
                        diam maecenas sed enim. Diam sollicitudin tempor id eu.
                        Aliquam eleifend mi in nulla posuere. Fusce id velit ut
                        tortor. Sed elementum tempus egestas sed sed risus
                        pretium quam. Ipsum faucibus vitae aliquet nec
                        ullamcorper sit amet risus nullam. Non odio euismod
                        lacinia at quis risus sed vulputate odio. Dui sapien
                        eget mi proin sed libero. Aliquet sagittis id
                        consectetur purus ut faucibus pulvinar elementum
                        integer. Non enim praesent elementum facilisis leo. Nisl
                        suscipit adipiscing bibendum est.
                    </p>
                </section>
                <section className='mt-5'>
                    <h3>Our Commitment to Accessibility</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Varius vel pharetra vel turpis nunc.
                        Tortor posuere ac ut consequat semper viverra. Mauris a
                        diam maecenas sed enim. Diam sollicitudin tempor id eu.
                        Aliquam eleifend mi in nulla posuere. Fusce id velit ut
                        tortor. Sed elementum tempus egestas sed sed risus
                        pretium quam. Ipsum faucibus vitae aliquet nec
                        ullamcorper sit amet risus nullam. Non odio euismod
                        lacinia at quis risus sed vulputate odio. Dui sapien
                        eget mi proin sed libero. Aliquet sagittis id
                        consectetur purus ut faucibus pulvinar elementum
                        integer. Non enim praesent elementum facilisis leo. Nisl
                        suscipit adipiscing bibendum est.
                    </p>
                </section>
            </Col>
        </div>
    );
};

export default About;
