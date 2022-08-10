 import React from 'react';
 import "./signup.css";
 import google from "../../resources/google-icon.png";
 import facebook from "../../resources/facebook-square-blue.svg";
 import {Link } from 'react-router-dom';
 

  function Signup (){
   return (
     <div className='signup'>
         <form className='login'>
                 <h1>Sign Up</h1>
                 <input className="email" type="email" placeholder="Email Address" required="Please enter your email">
                 </input>
                 <button className="continue-btn"><Link to='/joinus'>Continue</Link></button>
                 <p> OR </p>
                 <hr className="hr hr1" />
                 <hr className="hr hr2" />
                 <div className='divs'>
               
                    <button className="gmail-btn">
                     <img className='google-image' src={ google } alt="" />
                     Continue with Google
                     </button>
                    <button className="facebook-btn">
                     <img className="facebook-image" src={ facebook } alt=""/>
                     Continue with Facebook
                     </button>
                 </div>
                 <h5>Already have an account?<button className='login2' ><Link to='/signin'>Login</Link></button></h5>
                
         </form>
       {/* <RightSection /> */}
     </div>
   )
  }

  export default Signup;
 

 