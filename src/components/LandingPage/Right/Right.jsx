import React from 'react'
import {FaSistrix} from "react-icons/fa"
import './Right.css'

const Right = () => {
  return (
    <div className='right'>
        <div className="right_search">
            <input type="text" className='search_bar' placeholder='Search' />

<div className="search-icon">
    <FaSistrix  className='search'/>
</div>
    </div>
    <h2 className='tittle'>Poem Gentre</h2><br />
    <div>
        <div className='container'>
   <ul>
    <li><a href="#">Family</a></li>
    <li><a href="#">Love</a></li>
    <li><a href="#">Friendship</a></li>
   </ul>
   <a  className='morepoem' href="http://">More Poem</a>
   
    </div>
    </div>
   <div className='tips'>
   <h3 >Tips to Write a good poem</h3><br />

   <h5>Lorem ipsum</h5>
    <p> Lorem ipsum ipsum ipsum ipsum
         ipsum ipsum ipsum ipsum 
         ipsum ipsum ipsum
         </p><br />
    <h5>Lorem ipsum</h5>
    <p>Lorem ipsum ipsum ipsum ipsum ipsum ipsum 
        ipsum ipsum ipsum ipsum ipsum
        Lorem ipsum ipsum ipsum
        ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum</p><br />
        <h5>Lorem ipsum</h5><br />
    <p> Lorem ipsum ipsum ipsum ipsum
         ipsum ipsum ipsum ipsum 
         ipsum ipsum ipsum
         ipsum ipsum ipsum ipsum ipsum ipsum
         </p>
   </div>
   <div className='container1'>
   <ul>
    <li><a href="#">Help</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Terms</a></li>
    <li><a href="#">Privacy</a></li>
   </ul>
   
    </div>
    </div>
  )
}

export default Right