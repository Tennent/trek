import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to={'/'}></Link>
            </div>
            <div className='navbar-links'>
                <Link to='/' className="navbar-button">Home</Link>
                <Link to='/' className="navbar-button">About</Link>
                <Link to='/' className="navbar-button">Contact</Link>
                <Link to='/' className="sign-up-button">Sign Up</Link>
            </div>
        </nav>
    )
}
