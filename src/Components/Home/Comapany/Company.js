import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import './Company.css'
const Company = () => {
    
    return (
        <div className="my-5 text-center ">
        <div className="card-deck text-center logo">
            <div className="mr-2 ">
                <img src={slack} className="img-fluid"  alt="" />
            </div>
            <div>
                <img src={google} className="img-fluid"   alt="" />
            </div>
            <div>
                <img src={uber} className="img-fluid"   alt="" />
            </div>
            <div>
                <img src={netflix}  className="img-fluid"  alt="" />
            </div>
            <div>
                <img src={airbnb}  className="img-fluid"  alt="" />
            </div>
        </div>
    </div>
    );
};

export default Company;