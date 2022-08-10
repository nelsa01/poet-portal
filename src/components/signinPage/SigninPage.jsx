import React from "react";

import "./signinpage.css";
import { SignIn } from "../../components/signin/signCom";


export class SignInPage extends React.Component{

    render(){
        return(
            <div id="signPage">
                <div id="signPageLeft">
                    <h1>POET PORTAL</h1>
                </div>
                <div id="signPageRight">
                    <SignIn />
                </div>
            </div>
        );
    }
}