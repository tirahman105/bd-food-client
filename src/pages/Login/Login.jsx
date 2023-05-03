import React, { useContext } from "react";
import {  Form } from "react-bootstrap";
import './Login.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
    
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log( email, password);
    
        signIn(email, password) 
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from), {replace: true};
          
    
        })
        .catch(error => {
          console.log(error)
        })
        
    
      }
      
const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
  })
  .catch(error => {
    console.log(error)
  })
}
const handleGithubSignIn = () => {
  signInWithGithub()
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
  })
  .catch(error => {
    console.log(error)
  })
}

  return (
    <div className="bg-login">
          <div className="col-md-6 mx-auto border p-4 bg-light rounded ">
        <h3 className="text-center">Login</h3>
      <Form onSubmit={handleLogin}>
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
      <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline-primary"> <FaGoogle/> Sign in With Google</button>
            <button onClick={handleGithubSignIn} className="btn btn-outline-dark ms-3"> <FaGithub/> Sign in With GitHub</button>
          </div>
    </div>
    </div>
  );
};

export default Login;
