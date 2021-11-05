import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="head"><Link to="/"><img src={Logo} alt="logo" className="logo"/></Link></div>
                <ul className="nav-links">
                    <li className="active"><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/about" className="non-active">About</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
