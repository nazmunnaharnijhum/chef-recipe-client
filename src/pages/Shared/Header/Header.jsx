/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>

<Container>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{color:'wheat', fontSize:'40px'}} href="#home">TempuraTales</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
           
          </Nav>
          <Nav>
            <Link to="/profile">User profile picture</Link>
            
           {user ?
           <Button variant="secondary">Logout</Button> :
           <Link to="/login">
           <Button variant="secondary">Login</Button>
           </Link>
        }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>

        </div>
    );
};

export default Header;