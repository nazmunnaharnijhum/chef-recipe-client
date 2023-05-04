/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
    }
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
            
            
           {/* {user ?
           <Image style={{width:'40px'}} src={user.photoURL
           } roundedCircle /> : */}
           <div>
            { user ?
            <div>
                <NavLink>
           <Button onClick={handleLogOut} variant="secondary">Logout</Button>
           </NavLink> <Image style={{width:'40px'}} src={user.photoURL} title={user.displayName} roundedCircle />
            </div>: 
           <NavLink to="/login">
           <Button variant="secondary">Login</Button>
           </NavLink>
           }
           </div>
       {/* } */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>

        </div>
    );
};

export default Header;