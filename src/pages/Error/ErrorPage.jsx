/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <div className=''>
            <p className='display-3'>Sorry This Page Doesn't Exist!!!!</p>
            <p className='display-2'>404</p>
            <img className='mb-5' src="https://i.ibb.co/TLKDDbW/error-text-broken-glass-font.jpg" alt="" />
            <br />
            
            <Button variant="dark"><Link to="/">Go Back To Home</Link></Button>
        </div>
        
        </div>
    );
};

export default ErrorPage;