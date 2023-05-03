/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare, FaYoutubeSquare, FaWhatsappSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Container style={{backgroundColor:'black',  height: '60px', borderRadius:'8px 8px 0px 0px', marginTop: '70px'}}>

            </Container>
           <Container style={{backgroundColor: 'lightGray',height:'auto', borderRadius: '0px', padding:'50px'}}>
          
      <Row>
        <Col lg={4}>
        <div>
            <h4>About TempuraTales Community</h4>
            <h5>TempuraTales is a culinary community that has an extensive collection of recipes, cooking guides, and tips from both amateur and professional chefs.</h5>
           </div>
        </Col>
        <Col lg={4}>
        <div>
            <h4>Need help?</h4>
            <h5>Contact us via phone or email</h5>
            <h5>Phone: 01947865778</h5>
            <h5>Email: tempuratales@gmail.com</h5>
           </div>
        </Col>
        <Col lg={4}>
        <div>
            <h4>Follow us</h4>
           <h5><FaFacebookSquare/> <FaTwitterSquare/> <FaInstagramSquare/> <FaYoutubeSquare/> <FaWhatsappSquare/></h5>
           </div>
        </Col>
      </Row>
           </Container>
        </div>
    );
};

export default Footer;