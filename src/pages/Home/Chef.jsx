import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../Recipe/RecipeCard';
import { Row } from 'react-bootstrap';

const Chef = () => {

    
    const {id} = useParams();
    const chefRecipe = useLoaderData();
    return (
        <div>

            
            <h1>{id}</h1>
            
            <h2>Chef page : {chefRecipe.length}</h2>
           <div className="container">
           <div className='row row-cols-1 row-cols-md-3 g-4'>
             {
                    
                chefRecipe.map(recipe => <RecipeCard
                key={recipe._id}
                recipe={recipe}
                ></RecipeCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default Chef;