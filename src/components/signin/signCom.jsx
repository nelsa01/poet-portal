import React, { Component } from "react";
import  logos from '../../resources/facebook-square-blue.svg';
import google from '../../resources/google-icon.png';
import "./signin.css";
import {Link } from 'react-router-dom'

export class SignIn extends Component{

    render(){
        return(
            <div className='form-container'>
                <form action="" id="signin_form">
                    <h1 id="signin_title">Sign In</h1>
                    <div className="signin_input"><input type="text" placeholder="Email Address"/></div>
                    <div className="signin_input"><input type="text" placeholder="Password" /></div>
                    <button className="signin_button" id="signin_login"><p>Login</p></button>
                    <p id="signin_forgot"><a href="http://">Forgot Password</a></p>
                    
                    <p>OR</p>
                    <hr className="line1"/>
                    <hr className=" line2"/>
                    
                   <div className="div1">

                     <button className="signin_google">
                     <img  className="google" src={google} alt="" />
                      <p>Sign in with Google</p>
                      </button> 
                      </div>
                      <div className="div2">
                     
                    <button className="signin_facebook">
                     <img className="facebook" src={logos} alt=""/>
                     Sign in with Facebook
                     </button>
                     </div>

                     <div className="sign">
                     <h5>Create account here </h5>
                     <button><Link to='/signup'>Sign up</Link></button>
                     </div>
                     
                  
                  
                </form> 
            </div>
        );
    }
}