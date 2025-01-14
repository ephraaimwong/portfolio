import React from 'react'
import './NavBar.css'
import Navbar from './NavBar'

const AdhocNavBar = ({isAdhocNavbar}) => {
  return (
    <div>
{/* 
      {isAdhocNavbar && (
      <nav className='navbar adhoc-navbar'>        
      <div className='navbar-links'>
      <a className='nav-logo'>Ephraim J. Wong | 王恩荣</a>
            <ul>
                <li><a href='/'>Button</a></li>
                <li><a href='/'>Button</a></li>
                <li><a href='/'>Button</a></li>
            </ul>
        </div>
      </nav>
    )} */}

    {isAdhocNavbar && (<Navbar isAdhocNavbar={true}/>)}

    </div>
  )
}

export default AdhocNavBar
