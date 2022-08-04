import React from 'react'
import './landingpage.css'
import { Navigation } from './Navigation/Navigation'
import {Middle} from './Middle/Middle'
import {Right} from './Right/Right'
function Landingpage() {
  return (
    <div className='landingContainer'>
        <Navigation />
        <Middle />
        <Right />
    </div>
  )
}

export default Landingpage