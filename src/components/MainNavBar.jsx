import React, {useState, useEffect, useRef} from 'react'
import logo from '../assets/react.svg'
import './NavBar.css'
import menuIcon from '../assets/hamburger-menu-icon.png'
import AdhocNavBar from './AdhocNavBar';
import Navbar from './Navbar'
// import { debounce } from 'chart.js/helpers'

const MainNavBar = () => {

  const [isScrolled,setIsScrolled] = useState(false);
  const [isAdhocNavbar, setAdhocNavbar] = useState(false);

  //scroll handling function
  const scrollHandler = () => {
    if(window.scrollY > 1){
      setIsScrolled(true);
    } else{
      setIsScrolled(false);
    }

    if(isAdhocNavbar){
      setAdhocNavbar(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    const debouncedScrollHandler = () => {
      let isScrolling;
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        scrollHandler();
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener('scroll', debouncedScrollHandler);
    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, [isAdhocNavbar]); //re-run effect when isAdhocNavbar changes

  const floatingIconHandler = () => {
    setAdhocNavbar(true);
  }


  return (
    <>
    {/* <nav  className='navbar'>
        <div className='navbar-links'>
            <a className='nav-logo'>Ephraim J. Wong | 王恩荣</a>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Socials</a></li>
            </ul>
        </div>
    </nav> */}

    {/* main navbar */}
    <Navbar isAdhocNavbar={false}/>

    {/* adhoc navbar */}
    <AdhocNavBar isAdhocNavbar={isAdhocNavbar}/>



    {/* isAdhocNavbar is the boolean prop that determines whether component is rendered, setAdhocNavbar sets the boolean value of isAdhocNavbar
    <AdhocNavBar isAdhocNavbar={isAdhocNavbar} setAdhocNavbar={setAdhocNavbar}/> */}

    {/* Floating Icon */}
    <div className={`floating-icon ${isScrolled ? 'visible' : ''}`}>
        <button onClick={floatingIconHandler}>
        <img src = {menuIcon} className='smallNavIcon'/>  {/* &#9776; Hamburger icon */}
        </button>
      </div>
    </>
  );
};

export default MainNavBar
