import React from 'react';
import { Button} from '@material-ui/core';
const ServiceCard = ({data}) => {
    return (
        <div className="col-md-4shadow-lg p-3 mb-5 bg-white rounded col-sm-6 d-flex mb-5 pb-5 justify-content-center text-center">
                    <div className="w-75">
                    <div className="row">
                    <div className="col-md-4">
                    <img src={`data:image/png;base64,${data.image.img}`}  style={{maxWidth:"64px",height:'64px',borderRadius:'50%',}}alt=""/> 
                    </div>
                    <div className="col-md-4 offset-md-4 d-block m-auto">
                        <Button variant="outlined" color="secondary" > Pending</Button>
                    </div>
                    </div>
                    <h5 className='mt-4'> {data.projectName} </h5>
                     <small className="card-text">{data.projectDetails}</small>
                    </div>
                 </div>
    );
};

export default ServiceCard;