import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../Recipe/RecipeCard";
import { GiCampCookingPot, GiCook } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";

const Chef = () => {
  const { id } = useParams();
  const chefRecipe = useLoaderData();
  return (
    <div className="container">
      <div className="card p-4 chef-banner-bg">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={chefRecipe?.selectedChef?.picture}
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{chefRecipe?.selectedChef?.name}</h5>
              <p>{chefRecipe?.selectedChef?.bio}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">
                <span className="display-5 text-info">
                  <GiCook />
                </span>
                Experience: {chefRecipe?.selectedChef?.experience} Years
              </p>
              <p className="card-text">
                  <span className="display-5 text-danger"><GiCampCookingPot/></span> Recipes: {chefRecipe?.selectedChef?.recipes} recipes
                </p>
                <p className="card-text ">
                  <span className="text-primary display-5"> <AiFillLike/></span> Likes: {chefRecipe?.selectedChef?.likes}
                </p>
            </div>
          </div>
        </div>
      </div>
      

      <h2>Chef page : {chefRecipe.length}</h2>
      <div className="container">
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {chefRecipe?.selectedRecipe?.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
