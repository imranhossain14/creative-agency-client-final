
import React, { useEffect, useState } from 'react';

const Review = () => {
    const[reviews,setReviews]= useState([])
    useEffect(() =>{
            fetch('https://nameless-shelf-27185.herokuapp.com/reviews')
            .then(res=>res.json())
            .then(data=> setReviews(data.slice(0,6)))
    },[])

const textStyle ={
    color:'#7AB259'
}

const imgStyle ={
    height:"60px", 
    borderRadius: '50%'
}
    return (
        <div className=" container">
            <h3 className="text-center mt-5 mb-5">Clients <span style={textStyle}>Feedback</span></h3>
          <div className="card-columns ">
          {
                reviews.map((data) => <div className="card m-3 px-3">
                    <div className="p-4">
                    <div className="row  p-2 justify-content-sm-center">
                        <div className="col-md-4 img-fluid col-sm-5 m-auto">
                        <img src={data.imgUrl} style={imgStyle} alt="" /> <br/> <br/>
                        </div>
                        <div className="col-md-8 center-text mt-3">
                            <h6 className="font-weight-bold">{data.name}</h6>
                            <h6 className="font-weight-bold">{data.designation}</h6>
                        </div>
                        <small className="text-secondary ">{data.description}</small>
                    </div>
                </div> 
              
                </div>)
           }
          </div>
        </div>

      
    );
};

export default Review;