import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../images/carousel-2.png"
import img2 from "../../../images/carousel-1.png"
import img3 from "../../../images/carousel-5.png"
import img4 from "../../../images/carousel-4.png"

const CarouselItems =[
    {
        img: img1 
    },
    {
        img: img2
    },
  
    {
        img: img3 
    },
    {
        img: img4 
    }
]
const backgroundColor ={
    backgroundColor:"#111430"
}


const textStyle ={
    color:"#7AB259"
}

const CompanyPortfolios = () => {
    return (
        
            <div className="" style={backgroundColor}>
                <h3 className="text-center text-white pt-5 pb-5">Here are some of <span style={textStyle }>our works</span></h3>
               <Carousel className ="w-50 d-block m-auto pb-5">

            {
                CarouselItems.map((data)=><Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.img}
                  alt=""
                />
              </Carousel.Item>) 
            }
  
</Carousel>
            </div>
        
    );
};

export default CompanyPortfolios;