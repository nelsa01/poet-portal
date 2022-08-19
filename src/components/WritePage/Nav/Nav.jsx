import React from 'react'
import {FaHome,FaUserFriends,FaBook
,FaRegEnvelope,FaRegBell,FaRegEdit ,FaRegUserCircle} from "react-icons/fa" 
import './nav.css'
import logo from '../../../resources/logo.svg'

const Nav = () => {
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
        <div className="sidebar-user">
          <p>
            <FaRegUserCircle className='login-icon'/>
            
            &nbsp;&nbsp;Bwenge Bro</p>
        </div>
      </ul>
   
    </div>
  )
}

export default Nav