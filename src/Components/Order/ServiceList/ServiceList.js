import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import AssignmentIcon from '@material-ui/icons/Assignment';
import SmsIcon from '@material-ui/icons/Sms';
import ServiceCard from '../../Home/ServiceCard/ServiceCard';
import { IconButton } from '@material-ui/core';

const ServiceList = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const[orders,setOrders] = useState([]);
    let { name } = useParams();


    useEffect(()=>{
        fetch('https://nameless-shelf-27185.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=> res.json())
        .then(data =>setOrders(data))
    },[loggedInUser.email])
    
    return (
        <div className="container-fluid">
       <div className="row mt-3 text-left">
                <div className="col-md-3">
                    <Link to="/"><img src={logo} alt="" style={{width:"150px"}} className="d-block m-auto" /></Link>
                </div>
                <div className="col-m-6 mt-1 ml-auto ">
                   
                </div>
                <div className="col-md-3 mt-1 justify-content-center d-flex">
           
                    <img src={loggedInUser.img} style={{width:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="mt-3 ml-3">{loggedInUser.firstName}</h6>
                </div>
            </div>
        <div className="row mt-5 text-left " style={{height:"90vh"}}>
            <div className="col-md-2 mb-5 pb-5 ml-5 pl-5">
                <Link to={"/order/"+ name} style={{textDecoration:"none"}}  >
                <h6 className="text-dark">
                 <IconButton ><AddShoppingCartIcon className="text-dark" /> </IconButton>
                  Order
                 </h6>
                 
                </Link>
            
                <Link to={"/service-list/"+ name} style={{textDecoration:"none"}}>                    
                <h6 style={{color:"#009444"}} className="mt-3">
                <IconButton><AssignmentIcon  style={{color:"#009444"}}/>  </IconButton>
                Service list 
                </h6>
                </Link>
                <Link to={"/review/"+ name} style={{textDecoration:"none"}}>                    
                <h6 className="text-dark mt-3">
                <IconButton><SmsIcon className="text-dark"/>  </IconButton>
                Review
                </h6>
                </Link>
            </div>
            <div className="col-md-7">
                <div className="row ">
                {
                    orders.map((data)=> <ServiceCard data={data}></ServiceCard>)
                }
                </div>
            </div>
        </div> 
    </div>
    );
};

export default ServiceList;