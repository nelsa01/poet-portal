import React from 'react'
import Left from '../WritePage/Left/Left'
import Nav from '../WritePage/Nav/Nav'
import Right from '../WritePage/Right/Right'
import './Write.css'


function Write() {
  return (
    <div className='landingContainer'>
       <Nav />
       <Left />
       <Right />
    </div>
  )
}

export default Write