import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Row, Col, Form, Button, InputGroup} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container fluid>
                <Navbar.Brand href='/'>alti</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <NavDropdown title='Resources' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='/resources/getting-started'>
                                Getting Started
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/resources/faq'>
                                Frequently Asked Questions
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                    <div className='d-flex gap-3'>
                        <Form inline>
                            <InputGroup>
                                <Form.Control
                                    type='text'
                                    placeholder='Search'
                                />
                                <Button type='submit'>Submit</Button>
                            </InputGroup>
                        </Form>
                        <Button type='submit'>
                            Add to Discord
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
