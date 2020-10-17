import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconButton } from '@material-ui/core';
import TextsmsIcon from '@material-ui/icons/Textsms';
import OrderCard from './OrderCard';


const Order = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    let { name } = useParams();
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
         .then((data)=>{
             console.log(data);
             if(data.length ===1){
                setIsAdmin(true)
             }
   
         })
    },[loggedInUser.email])

    
    const[info,setInfo]=useState({});
    const[file,setFile] = useState(null) 
    const handleBlur = e=>{
        const  newInfo ={...info};
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange =(e)=>{
        const  newFile = e.target.files[0];
        setFile(newFile);
    }

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name)
        formData.append('email',info.email)
        formData.append('projectName',info.projectName)
        formData.append('projectDetails',info.projectDetails)
        fetch('http://localhost:5000/addOrder', {   
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Upload Success', data);
            })
    };
    
    const textStyle = {
        textDecoration:"none"
    }


    return (
        <div className="container-fluid">
            <div className="row mt-3 text-left">
                <div className="col-md-3">
                    <Link to="/"><img src={logo} alt="" style={{width:"150px"}} className="d-block m-auto" /></Link>
                </div>
                <div className="col-m-6 mt-1 ml-auto ">
                   
                </div>
                <div className="col-md-3 mt-1 justify-content-center d-flex">
                {
                       isAdmin && <Link to="/admin-panel/allServices" style={textStyle }>
                           <button className=" mt-3 btn btn-dark mr-5">
                           Admin
                       </button>
                       </Link>
                   }
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
            <div className="row mt-5 text-left " >
                <div className="col-md-2 orderItem mb-5 pb-5 ml-5 pl-5">
                    <Link to={"/order/"+ name} style={textStyle } >
                    <h6 style={{color:"#009444"}}>
                     <IconButton ><ShoppingCartIcon style={{color:"#009444"}}/> </IconButton>
                      Order
                     </h6>
                     
                    </Link>
                
                    <Link to={"/service-list/"+ name} style={textStyle }>                    
                    <h6 className="text-dark mt-3">
                    <IconButton><AssignmentIcon className="text-dark"/>  </IconButton>
                    Service List 
                    </h6>
                    </Link>
                    <Link to={"/review/"+ name} style={textStyle }>                    
                    <h6 className="text-dark mt-3">
                    <IconButton><TextsmsIcon className="text-dark"/>  </IconButton>
                    Review
                    </h6>
                    </Link>
                </div>


                <div className="col-md-5 ml-auto">
                        {
                            <OrderCard handleSubmit={handleSubmit} handleBlur= {handleBlur} handleFileChange={handleFileChange} name ={name}></OrderCard>
                        }

                </div>
                <div className="col-md-4">

                </div>
            </div>
            
        </div>
    );
};

export default Order;