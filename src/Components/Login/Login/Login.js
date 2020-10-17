import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from '../firebaseConfig';
import logo from "../../../images/logos/logo.png"
firebase.initializeApp(firebaseConfig);

export const handleSignOut = () => {
  return firebase.auth().signOut().then(function () {
    const SignOutUser ={
      isSignIn:false,
      firstName:"",
      email:"",
      error:"",
      success:false
    }
    return SignOutUser
  }).catch(function (error) {

  });
  
}

const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
 
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [oldUser, setOldUser] = useState(true);
  const [user, setUser] = useState(
    {
      error: "",
      email: "",
      isSignIn: false,
      password: "",
      img: "",
      firstName: "",
      lastName: ""

    }
   );
 
// Google sign in Configuration
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      console.log(result)
      const { email, photoURL,displayName } = result.user
      const signInObj = {
        firstName: displayName,
        email: email,
        img: photoURL,
        isSignIn: true,
        error: "",
        success: false
      }
      setUser(signInObj)
      setLoggedInUser(signInObj);
      history.replace(from);

    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }
 
  const logoStyle ={
    width:"200px",
    margin:"auto" ,
    display: "block"
  }

  const googleStyle= {
    outline: "none", 
    marginRight: "20px" 
  }

  const innerBoxStyle ={
    height:"400px",
    width: "700px",
    textAlign: "center" 
  }
  return (
        <div>
          <div className="mb-4 mt-4">
          <Link to="/">
          <img src={logo} alt="" className="d-block m-auto " style={logoStyle}/>
          </Link>
          </div>
          <div className="container shadow-lg p-3 mb-5 bg-white rounded" style={innerBoxStyle}>
          

<div className="row">
        <div className="col-md-8 mx-auto">
       
            <div className="px-2 mt-5 py-5 text-center">
              <h3 className="font-weight-bold">Login With</h3>
              <div
                onClick={handleSignIn}
                style={{ cursor: 'pointer' }}
                className="d-flex align-items-center p-2 border border-silver rounded-pill mb-2 mt-4"
              >
                <img
                  style={{ maxWidth: '40px' }}
                  src="https://i.ibb.co/V30SPbC/download.png"
                  alt=""
                />
                <span className="mx-auto">Continue with Google</span>
              </div>
              <h6>
                Don’t have an account?{' '}
                <Link to="/login">Create an account</Link>
              </h6>
            </div>
          </div>
        
      </div>
  
          </div >
  
        </div>

);}


export default Login;
