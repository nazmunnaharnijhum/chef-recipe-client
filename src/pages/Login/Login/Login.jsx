/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const {signIn} = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)
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
            setError('');
            form.reset();
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
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
        <p className='text-danger'>{error}</p>
      
      <Button variant="dark" type="submit">
        Login
      </Button>
      
      <br />
      { user ?
        <Button className='my-3' onClick={handleSignOut} variant="dark" type="submit">
        Sign out
      </Button> :
      <div>
        <Button onClick={handleGoogleSignIn} className='text-center my-3' variant="outline-dark"><FaGoogle/> Google Sign-in</Button>
      <Button onClick={handleGithubSignIn} className='text-center mb-2' variant="outline-dark"><FaGithub/> GitHub Sign-in</Button>
      </div>
      }
      
      <br />
      
      
      
      <br />
      <Form.Text className="text-secondary">
         Don't Have an Account? <NavLink to="/register">Register</NavLink>
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