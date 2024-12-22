import React from 'react'
import './HeadShot.css'
import pic from '../assets/converted_image.png'
import githublogo from '../assets/github-brands-solid.svg'

const HeadShot = () => {
  return (
    <>
    <div className='HeadShot-container'>
        <div> <img src = {pic}/> </div>
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
                <li><button><img src = {githublogo}/> Github</button></li>
                <li>Linkedin</li>
                <li>Email</li>
            </ul>
            <p>testing</p>
        </div>
  </div>
  </>
    
  )
}

export default HeadShot
