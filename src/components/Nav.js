import React from 'react'
import {Link } from 'react-router-dom'

function Nav() {
  return(
    <div>
      <ul className="nav-menu">
        <Link to='/home'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/news'><li>News</li></Link>
        <Link to='/contacts'><li>Contscts</li></Link>
      </ul> 
    </div>
  )
}

export default Nav
