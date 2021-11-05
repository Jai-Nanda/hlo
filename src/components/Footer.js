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
                        <p>hyperLocalization and More</p>
                    </div>
                </div>
                <div className="linkss">
                    <div className="soojao">
                        <h2>Product</h2>
                        <div className="fist">
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                        <a href="#">Documents</a>
                        <a href="#">FAQ's</a>
                        <a href="#">Pricing</a>
                    </div>
                    </div>
                     <div className="soojao">
                        <h2>About</h2>
                        <div className="fist">
                        <a href="#">Our Story</a>
                        <a href="#">Company</a>
                        <a href="#">Privacy</a>
                        <a href="#">Blog</a>
                        <a href="#">More</a>
                    </div>
                    </div>
                    <div className="soojao">
                        <h2>Contact</h2>
                        <div className="fist">
                        <a href="#">Advertising</a>
                        <a href="#">Press</a>
                        <a href="#">Email</a>
                        <a href="#">Partners</a>
                        <a href="#">Jobs</a>
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
