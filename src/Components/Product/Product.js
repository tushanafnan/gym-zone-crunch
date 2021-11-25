import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, url, id, producer} = props.sub || {};
    return (
        <div className="col">
            
        <div className="card text-center h-100 bg-secondary bg-gradient"> 
        <div className="img-div"> <img src={url} className="card-img-top " alt=""/> </div>
        <div className="card-body text-light">
        <h5 className="card-title">{name}</h5>
        <div className="card-text"><h6> Producer : {producer} <br /></h6> </div>
        <div className="card-footer border-0 h-100 bg-transparent"> 
        <Link to={`/product/${id}`}> <button className="btn bg-info w-100" ><b>Read More </b></button> </Link>
        </div>

        {/* <div className="card-text"> <button className="btn btn-info mt-2">Read More</button> </div> */}
        </div>
        </div>
        </div>
    );
};

export default Product;