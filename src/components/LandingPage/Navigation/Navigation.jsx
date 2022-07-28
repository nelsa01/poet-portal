import React from "react";
import "./navigation.css";
import Logo from "../../../resources/logo.svg";


export class Navigation extends React.Component{

    render(){
        return(
            <div>
                <header id="header" className="left_side">
                <img className="background-image" src={ Logo } alt=" ">
               </img>
                </header>
                <section id="first_section" className="left_side">
                    <ul id="menu">
                        <li><p>Home</p></li>
                        <li> <p>Community</p></li>
                        <li><p>Bookmarks</p></li>
                        <li><p>Message</p></li>
                        <li><p>Notifications</p></li>
                        <li><p>Write</p></li>
                    </ul>
                </section>
                <section id="last_section" className="left_side">
                        <p>Sign up/Login</p>
                </section>
            </div>
        );
    }
}