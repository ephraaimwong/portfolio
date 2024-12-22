import React from 'react'
import logo from '../assets/react.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div className='topNav'>
            <a><img src={logo}/></a>
            <ul>
                <li><a href='/'>Button</a></li>
                <li><a href='/'>Button</a></li>
                <li><a href='/'>Button</a></li>
            </ul>

        </div>
    </nav>
  )
}

export default NavBar
