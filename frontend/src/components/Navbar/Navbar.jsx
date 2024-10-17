import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className='navbar-logo'>
                <Link to={'/'}>
                    <img src="/trek-logo.png" alt="trek-logo" />
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to='/' className="navbar-button">Home</Link>
                <Link to='about' className="navbar-button">About</Link>
                <Link to='contact' className="navbar-button">Contact</Link>
                <Link to='/' className="signup-button">Sign Up</Link>
            </div>
        </nav>
    )
}
