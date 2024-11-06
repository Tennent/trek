import { useState } from "react";
import Modal from "react-modal";
import postUser from "../../services/postUser";
import "./Signup.css";

export default function Signup({ isOpen, onClose, onSwitch }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault()
        const messageBody = { user_name: userName, user_password: userPassword, email: userEmail };
        await postUser(messageBody);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal" overlayClassName="custom-overlay">
            <div className="signup-container">
                <form className='signup-form' onSubmit={handleRegister}>
                    <label htmlFor="userName">Username:</label>
                    <input id="userName" name="userName" type="text" />
                    <label htmlFor="userEmail">Email:</label>
                    <input id="userEmail" name="userEmail" type="text" />
                    <label htmlFor="userPassword">Password:</label>
                    <input id="userPassword" name="userPassword" type="password" />
                    <div className='signup-btn-container'>
                        <button type="submit" className="signup-button">Sign Up</button>
                        <button onClick={onClose} className="close-button">Close</button>
                    </div>
                </form>
                <a className="login-redirect" onClick={onSwitch}>Already have an account?</a>

                <div className="modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
