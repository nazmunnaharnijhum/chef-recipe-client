/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            form.reset();
            updateUserData(result.user, name, photo);
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    const updateUserData = (user,name, photo) => {
        updateProfile(user,{
            displayName: name ,photoURL:photo
        })
        .then(() =>{
            console.log('user name updated')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <Container className='mx-auto w-50 mb-5 mt-5'>
            <h3>Register</h3>
           <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditions" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button>
      <br />
      <Form.Text className="text-secondary">
         Already Have an Account? <NavLink to="/login">Login</NavLink>
        </Form.Text>
      <Form.Text className="text-success">
          
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
    
        </Container>
    );
};

export default Register;