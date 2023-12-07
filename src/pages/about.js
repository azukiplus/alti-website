import React from "react";
import { Container, Col } from "react-bootstrap";
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
                    <h2>
                        Introduction
                    </h2>
                    <h3>
                        Discord and Accessibility
                    </h3>
                    <p>
                        Discord is a popular online messaging platform available on both desktop and mobile. For our project, we examined how accessible Discord is for blind and low-vision (BLV) individuals.</p>
                    <p>
                        Currently, Discord allows for any user to add alt text manually to images they upload onto the platform. The problem with this is that many users don't know what alt text is, or won't add alt text to their images since they aren't part of the target audience that uses alt text. If users don't consciously decide to add alt text to their images, BLV individuals would not be able to access any picture media that people upload onto Discord. Also, if users forget to add alt text to their images, there is no way to edit their image and add alt text unless they delete the image and resend it.
                    </p>
                    <h3>
                        What is Alti?
                    </h3>
                    <p>
                        Alti is a Discord bot that automatically generates alt text for any image that gets uploaded onto Discord. Once you add Alti to your Discord server, Alti will automatically generate alt text for the image using artificial intelligence (AI).
                    </p>
                    <h3>
                        AI and Trustworthiness
                    </h3>
                    <p>
                        Alti runs off of two AI models: GPT-4 developed by OpenAI and Azure AI Vision developed by Microsoft. For any image, Alti will generate and display two versions of alt text using GPT-4 and Azure. But, since AI isn't always correct or accurate, we decided to allow for helpful users in a server to vote on which alt text is more accurate for any given image. Anyone in the server can vote for which alt text is more accurate. And, the more you vote, the more points you get in Alti's leaderboard!
                    </p>
                </section>
                <section className='mt-5'>
                    <h2>Related Work</h2>
                    <p>
                        In 2021, Meta announced that it would add AI-generated alt text for images so that BLV people can experience the imagery inside people's posts on its services. In this case, "participants had a positive reaction to [the automatic alt text] system and an enhanced experience with Facebook photos"
                        (https://dl.acm.org/doi/pdf/10.1145/2998181.2998364).
                    </p>
                    <p>
                        Other services like X (formerly Twitter) do not use AI-generated alt text. The service recently announced that users can add alt text to images upon posting an image, similar to how Discord currently works. This puts the decision of adding alt text to an image on the user, which results in "... a vast majority of user-uploaded images lack[ing] alt text" because "users tend to forget to add alt text and find authoring alt text to be difficult and time consuming" (https://dl.acm.org/doi/pdf/10.1145/3597638.3614495).
                    </p>
                </section>
                <section className='mt-5'>
                    <h2>
                        Methodology
                    </h2>
                    <h3>
                        Designing alti
                    </h3>
                    <h4>
                        Design choice: Voting between multiple alt texts
                    </h4>
                    <p>
                        Because AI can be inaccurate, we decided that we need humans to decide if Alti's generated alt text is truly accurate or not. Discord bots have built-in User Interface features such as buttons that allow for users to interact with a bot. Because Alti was built to feature two different alt texts from different AI models, we decided to use Discord's built-in buttons as buttons to vote for which alt text they think is better.
                    </p>
                    <h4>
                        Design choice: Leaderboard
                    </h4>
                    <p>
                        Alti relies on having people vote for what alt text they think is more accurate. To encourage voting, we decided to gamify the system by adding a leaderboard that displays the top alt text contributors and voters for a server.
                    </p>
                    <h3>
                        Developing alti
                    </h3>
                    <p>
                        Alti is an open source project and can be viewed on Github. The bot is coded with JavaScript, in particular, discord.js, a Node.js module that allows us to connect our bot with the Discord Application Programming Interface (API).
                    </p>
                    <p>
                        Here are the main steps Alti takes to generate alt text:
                    </p>
                    <ol>
                        <li>A user sends a message with an image in it.</li>
                        <li>Alti takes the image and sends it to two AI models: GPT-4 and Azure AI Vision. </li>
                        <li>The two AI models each respectively create alt text to describe the image, and send it back to Alti. </li>
                        <li>Alti displays both of the alt text received as a message sent into the Discord server. Alti also allows for users to vote on which alt text is better through reacting to the message with a button.</li>
                    </ol>
                    <p>
                        Here are the main steps used to create Alti's leaderboard:
                    </p>
                    <ol>
                        <li>Once a user reacts to a message with alt text options on it, the user gets a point. </li>
                        <li>The users with the most points show up at the top of the leaderboard. The data for the leaderboard is stored in Firebase.</li>
                    </ol>
                    <h3>
                        The role of disabled people
                    </h3>
                    <p>
                        To aid with design choices and ideas about using AI to generate alt text, we researched first person accounts of BLV people on the internet. We wanted to know what disabled people thought about AI to generate alt text, as well as how accessible Discord is for BLV people. Here are some examples we found:
                    </p>
                    <blockquote>
                        "Facebook has a brilliant feature where screen-readers describe images, in 2017 Facebook introduced automatic alternative text. Automatic alternative text (alt text) generates a description of a photo using artificial intelligence (AI) which is then read out loud by screen-readers. People using screen-readers will hear a list of items a photo may contain as they swipe past photos on Facebook, for example, a screen-reader might say, 'Image may contain: three people, people smiling, table, indoors' or 'image may contain: one person, outdoors, grass, plants and nature'... I use Facebook on my iPhone, iPad and also on the computer. On the iPhone and iPad, I use the Facebook app. I find it really easy to navigate and also find it very accessible (most of the time). I especially like the image description feature, and find this especially useful."
                        - Holly, a blogger who posts on her blog "Life of a Blind Girl"
                    </blockquote>
                    <p>
                        On the Discord support forums, there are BLV people who ask for Discord to add more functionalities around alt text, such as the feature to edit/add alt text after an image is uploaded.
                    </p>
                    <blockquote>
                        "I'm a blind discord user and I'm in servers where people posts a lot of images. We have the right to know what those images are about. There for I have a feature request.

                        Image and video descriptions.

                        You can [add] a text description to an image before uploading it, you can describe the image with the information the image contains. If you didn't [add] a description there should also be an option to do so if right clicking on the image.

                        [Similar] with videos, we all have the right to know what an image or a video contains."
                    </blockquote>
                </section>
                <section>
                    <h2>
                        Disability Justice Perspective
                    </h2>
                    <p>
                        From a disability justice standpoint, there are a few principles that have heavily influenced our design decisions and our project as a whole:
                    </p>
                    <ul>
                        <li>
                            Collective Access:  Access is a collective responsibility; everyone has a role to play in creating accessible communities. Everyone, including those with low vision, should be able to collectively access images that are uploaded onto a Discord channel. When alt text isn't included in images, there should still be ways for users to get alt text easily. This is the main principle that encouraged us to create Alti.
                        </li>
                        <li>
                            Interdependence: We should work with each other in order to meet access needs. We should depend on each other to get alt text for images. When there is no alt text provided for an image, we should collaborate in order to get alt text for those who would use it. This principle influenced our decision to add a voting system for generated alt text. When the alt text generated for an image is incorrect, misleading, or lacks information, we should depend on each other to help create better alt text.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>
                        Learnings and future work
                    </h2>
                    <h3>
                        Learnings
                    </h3>
                    <h4>
                        Reactions to the bot
                    </h4>
                    <p>
                        We tested alti by putting the bot into multiple different Discord servers without giving any context to the server members. The servers consisted of non-BLV individuals. We found that there were mainly 2 reactions to the bot: interest and apathy from people who are not BLV.</p>
                    <ul>
                        <li>
                            Interest: The first reaction we found to the bot was interest. When the bot generated alt text for images sent in the channel, people actively started to "play" with the bot by making it generate alt text to random images. One user sent images to the bot for 1.5 hours as a form of entertainment.
                        </li>
                        <li>
                            Apathy: The other reaction we found to the bot was apathy. When the bot generated alt text for images sent in the channel, people were confused but didn't further try to interact with the bot.
                        </li>
                    </ul>
                    <h4>
                        AI and accuracy
                    </h4>
                    <p>
                        After leaving the bot running for a few days, we looked at the accuracy of the AI-generated alt text. OpenAI's alt text was almost always more accurate than Azure's alt text. OpenAI described images in much more detail than Azure, and included relevant information such as location.
                    </p>
                    <h3>
                        Alti and the Future
                    </h3>
                    <p>
                        Our bot is transformative because it uses AI to automatically generate alt text in real time for images sent on Discord. This technology can heavily improve BLV people's experience on Discord, where most people don't add alt text to their images. However, using AI is a two-edged sword because it's not always accurate, and it can gender people in images even when prompted not to.
                    </p>
                    <p>
                        Alti's current main purpose is to generate alt text for images for BLV people. In the future, it would be nice to be able to transition Alti from an alt text bot into a full-fledged accessibility bot for Discord that can also generate transcriptions for audio-based content.
                    </p>
                    <ul>
                        <li>Discord recently introduced a voice memo feature which allows for users to send short audio messages. It would be helpful for people who are deaf or hard of hearing to be able to see a transcription of audio messages. </li>
                        <li>Alti currently uses two AI models: OpenAI's GPT-4 and Microsoft's Azure AI Vision. As AI technologies improve, it would be best to update Alti with the best current options for AI image recognition.</li>
                    </ul>
                </section>
            </Col>
        </div>
    );
};

export default About;
