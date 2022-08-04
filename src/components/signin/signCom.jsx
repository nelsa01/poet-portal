import React, { Component } from "react";
import  logos from '../../resources/facebook-square-blue.svg';
import google from '../../resources/google-icon.png';
import "./signin.css";

export class SignIn extends Component{

    render(){
        return(
            <div>
                <form action="" id="signin_form">
                    <h1 id="signin_title">Sign In</h1>
                    <div className="signin_input"><input type="text" placeholder="Email Address"/></div>
                    <div className="signin_input"><input type="text" placeholder="Password" /></div>
                    <button className="signin_button" id="signin_login">Login</button>
                    <p id="signin_forgot"><a href="http://">Forgot Password</a></p>
                    
                    <p>OR</p>
                    <hr className="line1"/>
                    <hr className=" line2"/>
                   
                   <div className="div1">

                     <button className="signin_google">
                     <img  className="google" src={google} alt="" />
                      <p>Sign in With Google</p>
                      </button> 
                      </div>
                      <div className="div2">
                     
                    <button className="signin_facebook">
                     <img className="facebook" src={logos} alt=""/>
                     sign in with facebook
                     </button>
                     </div>
                     
                  
                    <div id="signin_account">create account here <a href="">Sign up</a></div>
                </form> 
            </div>
        );
    }
}