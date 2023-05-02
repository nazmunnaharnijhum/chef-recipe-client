/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        
             <Card className="bg-dark text-white text-center " style={{borderRadius:'0 0 8px 8px'}}>
        <Card.Img src="/src/assets/painting-sushi-plate-with-picture-fish-it.jpg" />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: 70, color: 'darkWheat',marginTop:'50px',textShadow:'2px 2px 3px #333'}}>TempuraTales!</Card.Title>
          <Card.Text style={{color:'white', fontStyle:'bold', fontSize:28, textShadow:'2px 2px 3px #333'}}>
          TempuraTales is the ultimate cooking social
        community, where recipes come to life.
          </Card.Text>
          
        </Card.ImgOverlay>
      </Card>
     
    );
};

export default Banner;