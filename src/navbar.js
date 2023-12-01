import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/esm/InputGroup";

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
