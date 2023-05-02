/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../pages/Home/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={12}>
            <Banner></Banner>
        </Col>
        
      </Row>
      <Row>
        <Col lg={4}>
            <h2>Card 1</h2>
        </Col>
        <Col lg={4}>
            <h2>Card 2</h2>
        </Col>
        <Col lg={4}>
            <h2>Card 3</h2>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;