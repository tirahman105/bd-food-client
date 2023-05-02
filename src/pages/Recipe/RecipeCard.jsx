import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";


const RecipeCard = ({recipe }) => {
    const {name, ingredients, method, rating} = recipe;    
    return (
        <div className='container'>
            
    <Col>
       <Card className='my-3'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
       <p className='alert alert-warning'>ingredients</p>
        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
        <p className='alert alert-warning'> Recipe</p>
        <Card.Text>
         {method}
        </Card.Text>
        <button className='btn btn-color'><FaHeart /> </button>
      </Card.Body>
    </Card>
       </Col>
        </div>
    );
};

export default RecipeCard;