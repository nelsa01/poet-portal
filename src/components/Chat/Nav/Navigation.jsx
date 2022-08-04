import React from "react";
import "./navigation.css";
import Logo from "../../../resources/logo.svg";
import home from "../../../resources/home.svg";
import notification from "../../../resources/notification.png";
import bookmarks from "../../../resources/bookmarks.png";
import message from "../../../resources/message.png";
import community from "../../../resources/community.png";
import user from "../../../resources/user.svg";
import write from "../../../resources/write.png";
// import { Link } from "react-router-dom";



export class Nav extends React.Component{

    render(){
        return(
            <div className="navigation">
                <header id="header" className="left_side">
                <img className="background-image" src={ Logo } alt=" "/>
                </header>
                <section id="first_section" className="left_side">
                    <ul className="menu">
                        <li><p><img className="home" src={ home } alt="" /><span>Home</span></p></li>
                        <li><p><img className="community" src={ community } alt="" /><span>Community</span></p></li>
                        <li><p><img className="bookmarks" src={ bookmarks } alt="" /><span>Bookmarks</span></p></li>
                        <li><p><img className="message" src={ message } alt="" /><span>Message</span></p></li>
                        <li><p><img className="notification" src={ notification } alt="" /><span>Notifications</span></p></li>
                        <li><p><img className="write" src={ write } alt="" /><span>Write</span></p></li>
                    </ul>
                </section>
                <section id="last_section" className="left_side">
                    <div className="lastSectionUserLogin">
                    <img className="user" src={ user } alt="" /><p>Login</p>
                
                        </div>
                </section>
            </div>
        );
    }
}