import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const AppSection = () => {
    return (
        <div className='container'>
            <div className='row mt-3'>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                <h1 className='brand-color'>Looking to download our app? <br /> It's easy! </h1>
                <p className='mb-4'>Our app is available for download on both the App Store and Google Play. Simply search for <span className='fw-bold '>"BD food"</span> and click "download" to get started.</p>   
                
                <button className="btn btn-outline-dark btn-icon-text">
                          <span className='h1'><FaApple/></span> 
                          <span className="d-inline-block text-left">
                            <small className="font-weight-light d-block">Available on the</small>
                            App Store
                          </span>
                        </button>

                        <button className="btn btn-outline-dark btn-icon-text ms-2">
                          <span className='h1'> < FaGooglePlay/> </span>
                          <span className="d-inline-block text-left">
                            <small className="font-weight-light d-block">Get it on the</small>
                            Google Play
                          </span>
                        </button>

                </div>
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src="https://www.bublup.com/wp-content/uploads/2022/03/digital-recipe-book-app.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default AppSection;