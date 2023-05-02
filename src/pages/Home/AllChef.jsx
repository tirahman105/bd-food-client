import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllChef = () => {
  const [allChef, setAllChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allchef")
      .then((res) => res.json())
      .then((data) => setAllChef(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bangladeshi Chef</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allChef.map((chef) => (
          <div className="col" key={chef.id}>
            <div className="card">
              <img src={chef.picture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{chef.name}</h5>
                <p className="card-text">
                  Experience: {chef.experience}
                </p>
                <p className="card-text">
                  Recipes: {chef.recipes}
                </p>
                <p className="card-text">
                  Likes: {chef.likes}
                </p>
               <button className="btn btn-color"> <Link to={`/chef/${chef.id}`}>View Recipes</Link> </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
