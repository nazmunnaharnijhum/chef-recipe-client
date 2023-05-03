/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../pages/Home/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            
      <Row>
        <Col lg={12}>
            <Outlet></Outlet>
        </Col>
      </Row>
      
      <Row>
        <Col lg={12}><Footer></Footer></Col>
      </Row>
    </Container>
            
        </div>
    );
};

export default Main;