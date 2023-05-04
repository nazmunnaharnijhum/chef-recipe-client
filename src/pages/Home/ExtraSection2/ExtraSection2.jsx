/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const ExtraSection2 = () => {
    return (
        <div className=''>
            <Container className='mt-5 d-flex  gap-3'>
            <Image className='w-50' src="https://i.ibb.co/SVbBf9S/homemade-food-menu-recipe-recommended-restaurant.jpg" rounded />
            <Card.Title className='display-4 mt-5'>You can also check our menu. We are providing best food at the least cost.
            <br />
            Enjoy!!!!!
            </Card.Title>
            </Container>
        </div>
    );
};

export default ExtraSection2;