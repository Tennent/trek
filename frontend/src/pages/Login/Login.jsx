import Modal from "react-modal";
import "./Login.css";

export default function Login({ isOpen, onClose, onSwitch }) {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal" overlayClassName="custom-overlay">
            <div className="login-container">
                <form className='login-form' onSubmit={handleSubmit}>
                    <label htmlFor="userEmail">Email:</label>
                    <input id="userEmail" name="userEmail" type="text" />
                    <label htmlFor="userPassword">Password:</label>
                    <input id="userPassword" name="userPassword" type="password" />
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
