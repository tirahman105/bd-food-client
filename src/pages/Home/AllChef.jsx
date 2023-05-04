import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { GiCampCookingPot, GiCook } from "react-icons/gi";
import './AllChef.css'
const AllChef = () => {
  const [allChef, setAllChef] = useState([]);

  useEffect(() => {
    fetch("https://bd-food-server-tirahman105.vercel.app/allchef")
      .then((res) => res.json())
      .then((data) => setAllChef(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container ">
      <h1 className="text-center mt-4">Bangladeshi Chef</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {allChef.map((chef) => (
          <div className="col" key={chef.id} 
          chef ={chef}>
            <div className="card chef-card mb-4">

        
              <img src={chef.picture} className="card-img-top mx-auto  chef-image" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center ">{chef.name}</h5>
                <p className="card-text">
                 <span>< GiCook/></span> Experience: {chef.experience} Years
                </p>
                <p className="card-text">
                  <span><GiCampCookingPot/></span> Recipes: {chef.recipes} recipes
                </p>
                <div className="d-flex ">
                <p className="card-text flex-grow-1">
                  <span className="text-primary "> <AiFillLike/></span> Likes: {chef.likes}
                </p>
                <Link to={`/chef/${chef.id}`}><button className="btn btn-color"> View Recipes </button></Link>
               
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
