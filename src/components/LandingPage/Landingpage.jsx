import React from 'react'
import './landingpage.css'
import Middle from './Middle/Middle'
import Sidebar from './Navigation/Sidebar'
import Right from './Right/Right'

function Landingpage() {
  return (
    <div className='landingContainer'>
       <Sidebar />
       <Middle />
       <Right />
    </div>
  )
}

export default Landingpage