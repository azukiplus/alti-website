import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "../css/gettingstarted.css";

const GettingStarted = () => {
    return (
        <>
            <div className='p-3 mt-5'>
                <Container>
                    <div
                        className='jumbotron jumbotron-fluid mt-3 pb-3'
                        id='main'
                    >
                        <h1 className='getting-started'>
                            Getting Started with Alti
                        </h1>
                    </div>
                </Container>
                <Row style={{ marginRight: 0, marginLeft: 0 }}>
                    <Col sm={6}>
                        <section>
                            <h2>Step 1. Add Alti to Discord</h2>
                            <p>
                                Note: You must be an administrator of the
                                discord server you want to add Alti to.
                            </p>
                            <p>
                                To start, please accept the necessary
                                permissions and add Alti to the respective
                                server you want through this{" "}
                                <a
                                    href='https://discord.com/oauth2/authorize?scope=bot&client_id=1178510218003492915'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    authorization link
                                </a>
                                . If you don't see Alti after authorization,
                                please double check that you added Alti to the
                                right server.
                            </p>
                        </section>
                        <section className='mt-5'>
                            <h2>Step 2. Set Alti Up</h2>
                            <p>
                                Alti has features that server admins can
                                choose to enable or disable.
                            </p>
                            <ul>
                                {/* <li>
                                    Leaderboard: Alti can keep track of which
                                    members give the most alt text feedback!
                                    Feedback is extremely important in making
                                    sure that Alti gives clear and valuable alt
                                    text for users with screen readers. More
                                    feedback results in better alt text! Feel
                                    free to view the leaderboard using{" "}
                                    <code>
                                        /check-leaderboard
                                    </code>{" "}
                                    to see who the current top contributors are!
                                </li> */}
                                <li>
                                    Auto-response: By default, Alti responds to
                                    every image sent in any of your discord
                                    channels. If you'd like to disable this
                                    feature so that Alti only provides alt text
                                    when prompted, please use the{" "}
                                    <code>/alt-auto</code>{" "}
                                    command and select true or false to either
                                    enable or disable auto responses.
                                </li>
                                {/* <li>
                                    Opt-In roles: If you'd like members to be
                                    able to opt out of seeing Alti's messages,
                                    please enable opt-in roles using the{" "}
                                    <code>/opt-in</code>{" "}
                                    command!
                                </li> */}
                                <li>
                                    Vote timer: Using the <code>/vote-timer</code> command allows for users to change the amount of time they have to vote on alt text. 
                                </li>
                            </ul>
                            <p></p>
                        </section>
                        <section className='mt-5'>
                            <h2>Step 3. Using Alti</h2>
                            <p>
                                Alti is ready to use! Depending on the settings
                                that you've selected, Alti can keep track of a
                                leaderboard of your top contributing members and
                                generate alt text for every image sent in your
                                discord server! By using Alti, you help us make
                                discord a more accessible environment for blind
                                or low vision users who use screen readers!
                            </p>
                            <p>
                                Here's a brief list of commands that Alti comes
                                with!
                            </p>
                            <ul>
                                <li>
                                    <code>/help</code> lists all available commands
                                </li>
                                <li>
                                    <code>/alt-auto</code> enables or disables automatic alt text generation on every image sent
                                </li>
                                <li>
                                    <code>/alt-text</code> prompts Alti to generate alt text for the most recent image
                                </li>
                                <li>
                                    <code>/check-leaderboard</code> displays a leaderboard containing your top members who've contributed to alt text generation!
                                </li>
                            </ul>
                        </section>
                    </Col>
                    <Col sm={6}>
                        <Container className='mt-5 example-img-container'>
                            <Image
                                src={"/img/permissions.png"}
                                alt='A section of a separate discord webpage prompting the user to allow Alti the discord bot to join one of the servers that the user has.'
                                fluid
                                className='rounded'
                            />
                        </Container>
                    </Col>
                </Row>
            </div>
            <section id='faq-section' className='faq-container pt-5 pb-5'>
                <h2>Something not going right?</h2>
                <p className='faq'>
                    Check out our{" "}
                    <a
                        href='/resources/faq'
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
