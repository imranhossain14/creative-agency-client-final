import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import './ServiceCard.css'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.2]
const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceCard = (props) => {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 300, friction: 20 } }))
    const {serviceName,serviceTitle,details, image} = props.data
    return (
        
        <animated.div
        class="bg-light col-md-3 card mx-3 my-3"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: prop.xys.interpolate(trans) }}
      
        className=" animation-card col-md-4 col-sm-6 d-flex mb-5 pb-5 justify-content-center text-center">
           <Link to={"/order/"+ serviceName} style={{textDecoration:"none"}} className="text-dark">
           <div className="w-75">
           <img className='img-fluid w-25 mx-auto my-3' src={image}  alt=""/> 
           <h5 className='text-info'> {serviceTitle} </h5>
            <small className='text-secondary'>{details}</small>
           </div>
           </Link>
        </animated.div>
    );
};

export default ServiceCard;