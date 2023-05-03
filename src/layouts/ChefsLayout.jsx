/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ChefsLayout = () => {
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

export default ChefsLayout;