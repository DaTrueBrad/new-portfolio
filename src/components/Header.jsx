import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div id='app-header'>
      <img src="/logo.png" alt="" id="rubber-duck"/>
      <nav id='nav-bar'>
        <li><NavLink to='/home' activeStyle={{color: 'orange'}}>Home</NavLink></li>
        <li><NavLink to='/about' activeStyle={{color: 'orange'}}>About</NavLink></li>
        <li><NavLink to='/contact' activeStyle={{color: 'orange'}}>Contact</NavLink></li>
      </nav>
    </div>
  )
}

export default Header
