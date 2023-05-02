import React from "react";
import { Button, Form } from "react-bootstrap";
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-login">
          <div className="col-md-6 mx-auto border p-4 bg-light rounded ">
        <h3 className="text-center">Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
       
        
          <button className="btn btn-color mb-3">Login</button>
        
        <p>Not a member? <Link to="/register" className="text-danger ">Register</Link></p>
      </Form>
    </div>
    </div>
  );
};

export default Login;
