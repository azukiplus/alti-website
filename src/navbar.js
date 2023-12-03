import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button, InputGroup } from 'react-bootstrap';
import './css/navbar.css';

function NavBar() {
    return (
        <Navbar expand='lg' className='dark navbar-dark' sticky="top">
            <Container fluid>
                <Navbar.Brand className='dark' href='/'>alti</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link className='dark' href='/'>Home</Nav.Link>
                        <NavDropdown title='Resources' id='basic-nav-dropdown'>
                            <NavDropdown.Item className='dark' href='/resources/getting-started'>
                                Getting Started
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dark' href='/resources/faq'>
                                Frequently Asked Questions
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='dark' href='/about'>About</Nav.Link>
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
