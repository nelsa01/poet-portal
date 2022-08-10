import React from "react";
import './joinus.css'

export class JoinUs extends React.Component{
    render(){
        return (
            <div className='join'>
               <form className='box'>
                <h3 className='text'> Join Poet Portal</h3>
                <input className='username' type='username' placeholder="Username"></input>
                <input className="password" type="password" placeholder="Password"></input>
                <button className="finish-btn">Finish</button>
               </form>
            </div>
        )
    }
}