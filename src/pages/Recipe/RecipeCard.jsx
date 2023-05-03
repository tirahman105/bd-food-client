import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import './RecipeCard.css'


const RecipeCard = ({recipe }) => {
    const {name, ingredients, method, image, rating} = recipe;    
    return (
        <div className='container'>
            
    <Col>
       <Card className='my-3 bg-card'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
       <p className='headline-bg p-3'>ingredients</p>
        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
        <p className='headline-bg p-3'> Recipe</p>
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