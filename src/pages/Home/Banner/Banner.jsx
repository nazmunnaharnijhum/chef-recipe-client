/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        
             <Card className="bg-dark text-white text-center" style={{borderRadius:'0 0 8px 8px', marginBottom: '70px'}}>
        <Card.Img className='h-auto' src="https://i.ibb.co/RDY1WYw/painting-sushi-plate-with-picture-fish-it.jpg" />
        <Card.ImgOverlay>
          <Card.Title className='display-2' style={{ color: 'wheat',marginTop:'auto',textShadow:'2px 2px 3px #333'}}>TempuraTales!</Card.Title>
          <Card.Text style={{color:'white', fontStyle:'bold', fontSize:24, textShadow:'2px 2px 3px #333'}}>
          TempuraTales is the ultimate cooking social
        community, where recipes come to life.
          </Card.Text>
          
        </Card.ImgOverlay>
      </Card>
     
    );
};

export default Banner;