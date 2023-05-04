/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const {signIn} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        }) 
    }
    return (
        <Container className='mx-auto w-25 mb-5 mt-5'>
            <h3>Please Login</h3>
           <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
     
      
      <Button variant="dark" type="submit">
        Login
      </Button>
      <br />
      <Button onClick={handleGoogleSignIn} className='text-center my-3' variant="outline-dark"><FaGoogle/> Login with Google</Button>
      <br />
      <Button className='text-center mb-2' variant="outline-dark"><FaGithub/> Login with GitHub</Button>
      <br />
      <Form.Text className="text-secondary">
         Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
          
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;