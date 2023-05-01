import React from "react";
import {  Col, Row } from "react-bootstrap";
import fish from "../../assets/fish.png";



const Home = () => {
  return (
    <Row className="justify-content-center align-items-center mx-auto">
      <Col md={6}>
        <h1>Discover the rich flavors of Bangladeshi cuisine</h1>
        <p>Taste the cultural diversity of Bangladesh in every dish</p>
        <button className="btn btn-color">Explore Bangladeshi Foods</button>
      </Col>
      <Col md={6}>
      <img className="img-fluid" src={fish} alt="" />
      </Col>

      
    </Row>
  );
};

export default Home;
