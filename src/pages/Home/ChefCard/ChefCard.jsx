/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'

const notify = () => {
    toast("The recipe is your favorite");
}

// const [btn, setBtn] = useState(false);
// const disableBtn = () => {
//     setBtn(true);
//     toast("The recipe is your favourite");
// }
const ChefCard = () => {
  
  
    const chefs = useLoaderData();
    const {chef_bio,chef_picture, chef_name,likes, numbers_of_recipes, years_of_experience, recipes} = chefs;
    
    return (
        <div>
        <Row>
            <Col lg={2}>

            </Col>

            <Col lg={8}>
            <Card className='mt-5 '>
      <Card.Img className='' variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>Chef Name:{chef_name}</Card.Title>
        <Card.Text>Chef Bio: {chef_bio} </Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Card.Text>Number of Recipes: {numbers_of_recipes}</Card.Text>
        <Card.Text>Years of Experience: {years_of_experience}</Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col lg={2}>

            </Col>
        </Row>

    <h1 className='text-center mt-5 mb-3'>Some Popular Recipes Of This Chef</h1>

    <Row>
        <Col lg={1}></Col>

        <Col lg={10}>
        <Card >
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex gap-5'>
        <Image className='h-25 w-25' src={recipes.recipe_picture1} rounded />
        <div>
            <p className=''>Recipe Name: {recipes.recipe_name1}</p>
            <p>Ingredients: {recipes.ingredients1}</p>
            <p>Cooking Method: {recipes.cooking_method1}</p>
            <div className=''>
            <Rating style={{ maxWidth: 100 }} value={recipes.rating1} readOnly />
            <p>Rating: {recipes.rating1}</p>
            </div>
            <Button onClick={notify}
            
              variant="outline-secondary">Favourite</Button>
        </div>
        </ListGroup.Item>
        <ListGroup.Item className='d-flex gap-5'>
        <Image className='h-25 w-25' src={recipes.recipe_picture2} rounded />
        <div>
            <p className=''>Recipe Name: {recipes.recipe_name2}</p>
            <p>Ingredients: {recipes.ingredients2}</p>
            <p>Cooking Method: {recipes.cooking_method2}</p>
            <div className=''>
            <Rating style={{ maxWidth: 100 }} value={recipes.rating2} readOnly />
            <p>Rating: {recipes.rating2}</p>
            </div>
            <Button onClick={notify} variant="outline-secondary">Favourite</Button>
        </div>
        </ListGroup.Item>
        <ListGroup.Item className='d-flex gap-5'>
        <Image className='h-25 w-25' src={recipes.recipe_picture3} rounded />
        <div>
            <p className=''>Recipe Name: {recipes.recipe_name3}</p>
            <p>Ingredients: {recipes.ingredients3}</p>
            <p>Cooking Method: {recipes.cooking_method3}</p>
            <div className=''>
            <Rating style={{ maxWidth: 100 }} value={recipes.rating3} readOnly />
            <p>Rating: {recipes.rating3}</p>
            </div>
            <Button onClick={notify} variant="outline-secondary">Favourite</Button>
        </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </Col>

        <Col lg={1}></Col>
    </Row>
    <ToastContainer/>
        </div>
    
    );
};

export default ChefCard;