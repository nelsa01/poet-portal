import React from 'react'
import './landingpage.css'
import Sidebar from './Navigation/Sidebar'
import ContentSlider from './ContentSlider/ContentSlider'
import SideRight from './SideRight/SideRight'

function Landingpage() {
  return (
    <div className='landingContainer'>
       <Sidebar />
       {/* <Upper /> */}
       <ContentSlider />
       <SideRight />
    </div>
  )
}

export default Landingpage