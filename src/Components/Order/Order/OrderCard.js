import React from 'react';
import { IconButton } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';

const OrderCard = ({handleSubmit, handleBlur,handleFileChange}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        
        <input type="text" className="form-control" id="" placeholder="Your Name / Company's Name" name="name" onBlur={handleBlur} required/>
        </div>

        <div className="form-group ">
        <input type="email" className="form-control"placeholder="Your Email Address"  name="email" onBlur={handleBlur}  required/>
        </div>
        <div className="form-group">
        
        <input type="text" className="form-control" id="" defaultValue ="Graphics Design " name="projectSub"  onBlur={handleBlur} placeholder="Project Subject" required />
        </div>

        <div className="form-group">
       
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Project Details" onBlur={handleBlur} name="projectDetails"  required>

        </textarea>
    </div>


        <div className="form-row">
            <div className="col">
                <input type="text" className="form-control" id="" placeholder="Price"  name="price" onBlur={handleBlur} required/>
            </div>
            <div className="col">
            <input type="file" onChange={handleFileChange} id="file" className="inputfile"  />
                <label BackupIcon class="btn btn-lg btn-outline-success" htmlFor="file" ><h6 >
                <IconButton><BackupIcon />  </IconButton>
                    Upload Image 
                    </h6></label>
            </div>
        </div>
        
    
    
    
    <button type="submit" className="text-white btn   btn-dark btn-outline-danger ">Send</button>
</form>
    );
};

export default OrderCard;