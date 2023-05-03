/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefCard = () => {
  
    const chefs = useLoaderData();
    const {chef_bio,chef_picture} = chefs;
   
    return (

       
        
         <Card>
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>{chef_bio}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    );
};

export default ChefCard;