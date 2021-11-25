import React from 'react';
import './Body.css'

const Body = () => {
    return (
        
        <div className="container">
            <div className="row">
           <div className="col-12 col-md-6 mt-5 "> 
           <h1 className="fs-1"> 
            <span className="text-color fs-3"> Hurry, Time is Running Out!​</span> <br />
                <span className="fs-lg-1"> Join for $1 </span><br /> 
                <button className="btn btn-color text-center mt-5"> LEARN MORE</button>
            </h1>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center" ><img className="img-men" src="https://dj7w0h47bhjwk.cloudfront.net/assets/home-grid/class--action-sports-a3e1f48b852c0879bcb766e4c480fa0bab4ab47edf25508ce7a1ab89beaed95d.jpg" alt="" /></div>
            </div>
            </div>
                    );
                    };

export default Body;