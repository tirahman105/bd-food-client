import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    // console.log(error.message, status)
    return (
        <div className='container row mt-5 mx-auto'>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div>
      <h1>Oops! Something went wrong.</h1>
      {/* <h3> {error.message}</h3> */}
      <Link to='/'><button className="btn btn-color mt-3" >Back to Home</button> </Link>
      
      </div>
    </div>
    <div className='col-md-6'>
        <img className='img-fluid' src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt="" />
    </div>
        </div>
    );
};

export default ErrorPage;