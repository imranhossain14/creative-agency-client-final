import React from 'react';
import frame from '../../../images/logos/Frame.png'
const HeaderBody = () => {
    return (
        <div className='container container-fluid mt-5 col-xs-12 '>
            <div className="row">
                <div className="col-md-4 mt-5 ">
                    <h1 className="font-weight-bold"> Let's Grow Your Team To The Next Level</h1>
                    <small >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quisquam accusamus consectetur quos. Sequi, porro.</small>
                        <br/>
                    <button style={{width: '170px'}} className="btn btn-dark mt-2">Hire Us</button>
                </div>

                <div className="col-md-7 offset-md-1 d-block">
                    <img className="img-fluid " src={frame} alt="" style={{width:'500px'}}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;