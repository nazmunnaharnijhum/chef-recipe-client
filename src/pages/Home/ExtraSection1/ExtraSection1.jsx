/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


//This is an extra section of some cards
const ExtraSection1 = () => {
    return (
        <div className='text-center mb-5'>
            <h2 style={{backgroundColor: 'lightgray', border:'2px solid black', borderRadius: '8px', alignItems: 'center'}} className='text-center p-3  mb-2'>TempuraTales in Numbers</h2>
         <Container className='d-flex text-center mb-5 gap-3'>
            
         <Card style={{ width: '18rem' }}>
      <Card.Img className='h-50' variant="top" src="https://i.ibb.co/GvTqvKW/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering.jpg" />
    
      <Card.Body>
        <Card.Title className='display-3'>1730</Card.Title>
        <Card.Title >members</Card.Title>
       
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='h-50' variant="top" src="https://i.ibb.co/K0sB2KQ/purple-magnifying-data-search-research-looking-buy-icon-ecommerce-business-icon-online-shopping-conc.jpg" />
      <Card.Body>
        <Card.Title className='display-3'>1250</Card.Title>
        <Card.Title>recipes</Card.Title>
       
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='h-50' variant="top" src="https://i.ibb.co/71JbRgg/icon-blue-paper-camera.jpg" />
      <Card.Body>
        <Card.Title className='display-3'>5300</Card.Title>
        <Card.Title>photos</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='h-50' variant="top" src="https://i.ibb.co/ZGgybk7/mail-green-button-icon-isolated.jpg" />
      <Card.Body>
        <Card.Title className='display-3'>2300</Card.Title>
        <Card.Title>Forum posts</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='h-50' variant="top" src="https://i.ibb.co/dcVMdcf/isolate-white-rectangle-inside-blue-text-message-box-white-background-symbol-chat-communication-conc.jpg" />
      <Card.Body>
        <Card.Title className='display-3'>7400</Card.Title>
        <Card.Title>comments</Card.Title>
       
        
      </Card.Body>
    </Card>
            </Container>  
            <Button className='p-2 ' variant="dark" type="submit">
        Join Us
      </Button> 
      <hr />
        </div>
    );
};

export default ExtraSection1;