/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from './Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2>this is home : </h2>
        </div>
       
    );
};

export default Home;