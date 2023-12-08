import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './css/footer.css';

function Footer() {
    return (
        <footer className="page-footer pt-4">
            <div className="container-fluid text-center">
                <Row className='p-3'>
                    <Col className='p-3'>
                        <a className="logo text-center" href="/">alti</a>
                    </Col>
                    <Col className='p-3'>
                        <ul className="list-unstyled footer-links">
                            <li className='p-1'><a href='/'>Home</a></li>
                            <li className='p-1'><a href='/resources/getting-started'>Getting Started</a></li>
                            <li className='p-1'><a href='/resources/faq'>Frequently Asked Questions</a></li>
                            <li className='p-1'><a href='/about'>About</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer >
    )
}

export default Footer;
