/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

<Container>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{color:'wheat', fontSize:'40px'}} href="#home">TempuraTales</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">User profile picture</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>

        </div>
    );
};

export default Header;