import React from "react";
import { Image, Button, Stack, Container, Row, Col } from "react-bootstrap";
import "../css/gettingstarted.css";

const GettingStarted = () => {
    return (
        <>
            <div className='p-3 mt-5'>
                <Container>
                    <div className='jumbotron jumbotron-fluid mt-3 pb-3'>
                        <h2 className='display-4'>Getting Started with Alti</h2>
                    </div>
                </Container>
                <Row style={{ marginRight: 0, marginLeft: 0 }} className='ms-5'>
                    <Col sm={6}>
                        <section className='ms-3 mt-5'>
                            <h3>Step 1. Add Alti to Discord</h3>
                            <p>
                                Note: You must be an administrator of the
                                discord server you want to add Alti to.
                            </p>
                            <p>
                                Add Alti to the respective server you want
                                through this{" "}
                                <a
                                    href='https://www.washington.edu/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    authorization link
                                </a>
                                .
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Varius vel pharetra vel turpis nunc. Tortor
                                posuere ac ut consequat semper viverra. Mauris a
                                diam maecenas sed enim. Diam sollicitudin tempor
                                id eu. Aliquam eleifend mi in nulla posuere.
                                Fusce id velit ut tortor. Sed elementum tempus
                                egestas sed sed risus pretium quam. Ipsum
                                faucibus vitae aliquet nec ullamcorper sit amet
                                risus nullam. Non odio euismod lacinia at quis
                                risus sed vulputate odio. Dui sapien eget mi
                                proin sed libero. Aliquet sagittis id
                                consectetur purus ut faucibus pulvinar elementum
                                integer. Non enim praesent elementum facilisis
                                leo. Nisl suscipit adipiscing bibendum est.
                            </p>
                        </section>
                        <section className='ms-3 mt-5'>
                            <h3>Step 2. Set Alti Up</h3>
                            <p>
                                Choose if you would like to enable Alti's
                                leaderboard
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Varius vel pharetra vel turpis nunc. Tortor
                                posuere ac ut consequat semper viverra. Mauris a
                                diam maecenas sed enim. Diam sollicitudin tempor
                                id eu. Aliquam eleifend mi in nulla posuere.
                                Fusce id velit ut tortor. Sed elementum tempus
                                egestas sed sed risus pretium quam. Ipsum
                                faucibus vitae aliquet nec ullamcorper sit amet
                                risus nullam. Non odio euismod lacinia at quis
                                risus sed vulputate odio. Dui sapien eget mi
                                proin sed libero. Aliquet sagittis id
                                consectetur purus ut faucibus pulvinar elementum
                                integer. Non enim praesent elementum facilisis
                                leo. Nisl suscipit adipiscing bibendum est.
                            </p>
                        </section>
                        <section className='ms-3 mt-5'>
                            <h3>Step 3. Commands!</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Varius vel pharetra vel turpis nunc. Tortor
                                posuere ac ut consequat semper viverra. Mauris a
                                diam maecenas sed enim. Diam sollicitudin tempor
                                id eu. Aliquam eleifend mi in nulla posuere.
                                Fusce id velit ut tortor. Sed elementum tempus
                                egestas sed sed risus pretium quam. Ipsum
                                faucibus vitae aliquet nec ullamcorper sit amet
                                risus nullam. Non odio euismod lacinia at quis
                                risus sed vulputate odio. Dui sapien eget mi
                                proin sed libero. Aliquet sagittis id
                                consectetur purus ut faucibus pulvinar elementum
                                integer. Non enim praesent elementum facilisis
                                leo. Nisl suscipit adipiscing bibendum est.
                            </p>
                        </section>
                    </Col>
                    <Col sm={6}>
                        <Container className='mt-5 example-img-container'>
                            <Image
                                src={"/img/permissions.png"}
                                alt='A large brick building at the University of Washington. The building has many rectangular windows and has a castle-like structure.'
                                fluid
                                className='rounded'
                            />
                        </Container>
                    </Col>
                </Row>
                
            </div>
            <section id='faq-section' className='faq-container pt-5 pb-5'>
                    <h3>Something not going right?</h3>
                    <p className='faq'>
                        Check out our{" "}
                        <a
                            href='https://www.washington.edu/'
                            target='_blank'
                            rel='noreferrer'
                            className='faq-link'
                        >
                            FAQ
                        </a>
                    </p>
                </section>
        </>
    );
};

export default GettingStarted;
