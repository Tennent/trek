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
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>Sign Up</Link>
            </div>
        </nav>
    )
}
