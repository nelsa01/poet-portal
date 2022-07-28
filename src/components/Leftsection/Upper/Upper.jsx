import React from 'react'
import './upper.css'

class Upper extends React.Component{
    render(){
        return (
            <div className="top">
                <form className='sign-up'>
                <h1>Sign Up</h1>
                <input className="email" type="email" placeholder="Email Address">
                </input>

                </form> 
            </div>
        )
    }
}

export default Upper;