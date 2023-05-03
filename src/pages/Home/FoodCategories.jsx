import React from 'react';
import { FaFish } from "react-icons/fa";
import './FoodCategory.css'
import Marquee from "react-fast-marquee";

const FoodCategories = () => {
    return (
        <div className='category-bg'>
            <h3 className='text-center mt-4'>Recipe categories</h3>
            <Marquee pauseOnHover={true}>
            <div className='d-flex justify-content-between px-4 text-center'>
            
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png" alt="" />
            </div>
            <p>Beef</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075494.png" alt="" />
            </div>
            <p>Fish</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
               <img src="https://cdn-icons-png.flaticon.com/512/184/184532.png" alt="" />
            </div>
            <p>Rice</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/1206/1206237.png" alt="" />
            </div>
            <p>Chicken</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png" alt="" />
            </div>
            <p>Vegetables</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/837/837560.png" alt="" />
            </div>
            <p>Egg</p>
            </div>
            <div className='mx-4'>
            <div className='food-icon text-center mx-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/2488/2488632.png" alt="" />
            </div>
            <p>Dessert</p>
            </div>
            </div>
</Marquee>
            

            
        </div>
    );
};

export default FoodCategories;