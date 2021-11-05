import React from 'react'
import Image from '../static/hello.png'
import './css/HeroSection.css'
import { Link } from 'react-router-dom'
import hlo from '../static/logo.png'
const HeroSection = () => {
    return (
        <>
        <div className="main">
          <div className="heroflex">
            <div className="textflex">
              <img src={hlo} alt="" className="hlo"/>
              <p>hyperLocalization and More!</p>
              <div className="buttons">
                <a href="https://www.figma.com/file/UqXKjbV0gbUNQ70rpraUOB/hlo?node-id=104%3A29"  rel="noreferrer" target="_blank"><button className="btn-download">DOWNLOAD</button></a>
                <Link to="/about">Learn More <span><i class="fas fa-arrow-right"></i></span></Link>
              </div>
            </div>
            <div className="image">
              <img src={Image} alt="mockup" />
            </div>
          </div>
          </div>
        </>
    )
}

export default HeroSection
