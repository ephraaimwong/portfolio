import React from 'react'
import './HeadShot.css'
import pic from '../assets/HeadShot-Collage/converted_image.png'
import githubLogoBlack from '../assets/github-logo-black.svg'
import githubLogoWhite from '../assets/github-logo-white.svg'
import linkedinLogoWhite from "../assets/linkedin-logo-white.png";
import linkedinLogoBlack from "../assets/linkedin-black.png";
import gmailLogo from '../assets/gmail.svg';
import images from '../utilFunctions/importImages'; // Import the images
import HeadShotCollage from './HeadShotCollage'


const HeadShot = () => {
  return (
    <>
    <div className='HeadShot-container'>
        <div> <HeadShotCollage images = {images}/> </div>
        <div className='about-me'>
            <div className='HS-h1'>
                Ephraim J. Wong | 王恩荣
            </div>
            <p>
                Currently pursuing a BSc Computer Science from the University of Oklahoma.
            </p>
            <p>
                Beverage goblin.
            </p>
        </div>
        <div className='socials'>
            <ul className='HS-ul'>
                <li>
                    <button className='button-github' onClick={() => window.open('https://github.com/ephraaimwong')}>
                        <img src = {githubLogoBlack} className='github-logo github-logo-black'/>
                        <img src = {githubLogoWhite} className='github-logo github-logo-white'/>
                    </button>
                </li>
                <li> 
                    <button className='button-linkedin'onClick={() => window.open('https://www.linkedin.com/in/ephraimjw/')}>
                        <img src = {linkedinLogoWhite} className='linkedin-logo linkedin-logo-white'/>
                        <img src= {linkedinLogoBlack} className='linkedin-logo linkedin-logo-black'/>
                    </button>
                </li>
                <li>
                    <button className='button-gmail'>
                        <img src = {gmailLogo}/></button>
                        {/* implement a modal/popup to either 1) copy my email address or 2) open their email client with my email preloaded */}
                </li>
            </ul>
            <p>testing</p>
        </div>
  </div>
  </>
    
  )
}

export default HeadShot
