import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../../pages/Signup/Signup";
import './Navbar.css';

export default function Navbar() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("signup");

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setModalType("signup");
    };

    return (
        <>
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
                    <button className="signup-button" onClick={openModal}>Sign Up</button>
                </div>
            </nav>

            <Signup isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}
