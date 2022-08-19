import React from 'react'
import {FaHome,FaUserFriends,FaBook
,FaRegEnvelope,FaRegBell,FaRegEdit ,FaRegUserCircle} from "react-icons/fa" 
import './Sidebar.css'
import logo from '../../../resources/logo.svg'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
   
    <div className='sidebar-icons'>
      <div className='logo'>
        <img src={logo} alt="" srcset="" />

      </div>
      <ul>
        <li>
          <a href="#">
            <FaHome className='icons'/>
            Home
          </a>
        </li>

        <li>
          <a href="#">
            <FaUserFriends className='icons'/>
            Community
          </a>
        </li>

        <li>
          <a href="#">
            <FaBook className='icons'/>
            Bookmarks
          </a>
        </li>

        <li>
          <a href="#">
            <FaRegEnvelope className='icons'/>
            Message
          </a>
        </li>

        <li>
          <a href="#">
            <FaRegBell className='icons'/>
            Notifications
          </a>
        </li>

        <li>
          <a href="#">
            <FaRegEdit className='icons'/>
            Write
          </a>
        </li>
        {/* <div className="sidebar_btn"> */}
          <button className='btn'><Link to='/signup'>Get Started</Link></button>

        {/* </div> */}

        <div className="sidebar-user">
          <a href="">
            <FaRegUserCircle className='login-icon'/>
            
            &nbsp;&nbsp;Login</a>
        </div>
      </ul>
   
    </div>
  )
}

export default Sidebar