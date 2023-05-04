import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import './RecipeCard.css'
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({recipe }) => {
    const {name, ingredients, method, image, rating} = recipe;  
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);
        // show toast notification with heart icon
        toast(
          <div>
            <span className='me-2'>the recipe is your favorite</span> 
            <FaHeart size={16} color="#E5522E" style={{ marginRight: '8px' }} />
            
          </div>,
          {
            position: toast.POSITION.TOP_RIGHT
          }
        );
      };
   
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
        <button onClick={handleClick} disabled={isDisabled}  className='btn btn-color'><FaHeart /> </button>
      </Card.Body>
      <ToastContainer />
    </Card>
       </Col>
        </div>
    );
};

export default RecipeCard;