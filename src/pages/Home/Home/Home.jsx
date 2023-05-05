/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { Link, useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';

//Japanese cuisine

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-assignment10-server-nazmunnaharnijhum.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
    return (
        
        <div>
           
            <Row>
        <Col lg={12}>
            <Banner></Banner>
        </Col>
        
      </Row>
            <Row lg={12}> 
        
            <ExtraSection1></ExtraSection1>
      
        
      </Row>
        
            <div className='card-container mx-auto'>
            {
               chefs.map(chef => <Container
               key={chef.id}
               chef={chef}
               >
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                    <Card style={{ height:'auto', width:'auto' }}>
      <Card.Img variant="top" src={chef.chef_picture} />
      <Card.Body>
        <Card.Title>Chef Name: {chef.chef_name}</Card.Title>
        <Card.Title>Years of Experience: {chef.years_of_experience}</Card.Title>
        <Card.Title>Number of Recipes: {chef.numbers_of_recipes}</Card.Title>
        <Card.Title>Likes: {chef.likes}</Card.Title>
        <Link to={`/chefs/${chef.id}`}><Button variant="secondary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
               </Container>)
            }
        </div>
        <Row>
        <Col lg={12}>
            <ExtraSection2></ExtraSection2>
        </Col>
        
      </Row>
        </div>
       
    );
};

export default Home;