/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
           
          </Nav>
          <Nav>
            <NavLink to="/profile">User profile picture</NavLink>
            
           {user ?
           <Image src={user.photo} roundedCircle /> :
           <NavLink to="/login">
           <Button variant="secondary">Login</Button>
           </NavLink>
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