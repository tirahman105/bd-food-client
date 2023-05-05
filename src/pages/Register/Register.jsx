import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
   
    setError('');

    if(password !== confirm){
      setError('Your password did not match')
      return
  }else if(password.length < 6 ){
      setError('Password must be at least 6 characters or longer ')
      return
  }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateProfile(createdUser, {
          displayName : name, photoURL: photo
        });
        form.reset();
        Swal.fire(
          'Success!',
          'Your Account has been created!',
          'success'
        )
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-login">
      <div className="col-md-6 mx-auto border p-4 bg-light rounded ">
        <h3 className="text-center">Register Now!</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Photo url</Form.Label>
            <Form.Control
              name="photo"
              type="text"
              placeholder="Provide your photo url"
              required
            />
          </Form.Group>

          <button className="btn btn-color mb-3">Register</button>
    <p className="text-danger">{error}</p>
          <p>
            Already a member?{" "}
            <Link to="/login" className="text-danger ">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
