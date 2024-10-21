import Modal from "react-modal";

export default function Signup({ isOpen, onClose }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal" overlayClassName="custom-overlay">
            <div className="signup-container">
                <form className='signup-form' onSubmit={handleSubmit}>
                    <label htmlFor="userName">Email:</label>
                    <input id="userEmail" name="userEmail" type="text" />
                    <label htmlFor="userPassword">Password:</label>
                    <input id="userPassword" name="userPassword" type="password" />
                    <div className='signup-btn-container'>
                        <button type="submit" className="signup-button">Sign Up</button>
                        <button onClick={onClose} className="close-button">Close</button>
                    </div>
                </form>
                <a className="login-redirect" href="">Already have an account?</a>

                <div className="modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
