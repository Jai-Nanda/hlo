import React from 'react'
import './Footer.css'
import Hol from '../static/whitess.png'
const Footer = () => {
    return (
        <>
            <div className="full">                
            <div className="footer">
                <div className="loging">
                    <div className="hol">
                        <img src={Hol} alt="" />
                    </div>
                    <div className="shit">
                        <p>hyperLocalization and More!</p>
                    </div>
                </div>
                <div className="linkss">
                    <div className="soojao">
                        <h2>Product</h2>
                        <div className="fist">
                        <a href="https://bit.ly/3iPnfML">Features</a>
                        <a href="https://bit.ly/3iPnfML">Integrations</a>
                        <a href="https://bit.ly/3iPnfML">Documents</a>
                        <a href="https://bit.ly/3iPnfML">FAQ's</a>
                        <a href="https://bit.ly/3iPnfML">Pricing</a>
                    </div>
                    </div>
                     <div className="soojao">
                        <h2>About</h2>
                        <div className="fist">
                        <a href="https://bit.ly/3iPnfML">Our Story</a>
                        <a href="https://bit.ly/3iPnfML">Company</a>
                        <a href="https://bit.ly/3iPnfML">Privacy</a>
                        <a href="https://bit.ly/3iPnfML">Blog</a>
                        <a href="https://bit.ly/3iPnfML">More</a>
                    </div>
                    </div>
                    <div className="soojao">
                        <h2>Contact</h2>
                        <div className="fist">
                        <a href="https://bit.ly/3iPnfML">Advertising</a>
                        <a href="https://bit.ly/3iPnfML">Press</a>
                        <a href="https://bit.ly/3iPnfML">Email</a>
                        <a href="https://bit.ly/3iPnfML">Partners</a>
                        <a href="https://bit.ly/3iPnfML">Jobs</a>
                    </div>
                    </div>
                </div>
                <div className="social">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-gitlab"></i>
                </div>
        </div>
        </div>
        </>
    )
}

export default Footer
