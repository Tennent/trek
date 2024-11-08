import { useState } from 'react'
import Modal from "react-modal";
import loginUser from '../../services/loginUser';
import getUserCarIds from '../../services/getUserCarIds';
import "./Login.css";

export default function Login({ isOpen, onClose, onSwitch, user, setUser, setUserCarIds }) {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const messageBody = { user_name: userName, password: userPassword };
            const userData = await loginUser(messageBody);

            if (!userData.error) {
                const carIds = await getUserCarIds(userData._id);

                setUser(userData);
                setUserCarIds(carIds);

                onClose();
            }
        } catch (error) {
            console.error("Login error:", error);
            setUserCarIds([]);
        }
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal" overlayClassName="custom-overlay">
            <div className="login-container">
                <form className='login-form' onSubmit={handleLogin}>
                    <label htmlFor="userName">Username:</label>
                    <input id="userName" name="userName" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <label htmlFor="userPassword">Password:</label>
                    <input id="userPassword" name="userPassword" type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    <div className='login-btn-container'>
                        <button type="submit" className="login-button">Login</button>
                        <button onClick={onClose} className="close-button">Close</button>
                    </div>
                </form>
                <a className="signup-redirect" onClick={onSwitch}>Don't have an account? Register here!</a>

                <div className="modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
