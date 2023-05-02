import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-login">
          <div className="col-md-6 mx-auto border p-4 bg-light rounded ">
        <h3 className="text-center">Register Now!</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="email" placeholder="Your Name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo url</Form.Label>
          <Form.Control name="photo" type="password" placeholder="Provide your photo url" />
        </Form.Group>
        
        
          <button className="btn btn-color mb-3">Register</button>
        
        <p>Already a member? <Link to="/login" className="text-danger ">Login</Link></p>
      </Form>
    </div>
    </div>
    );
};

export default Register;