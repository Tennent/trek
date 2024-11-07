import { useNavigate } from 'react-router-dom';
import './Footer.css'

export default function Footer({ user }) {
    const navigate = useNavigate();
    const handleCallToAction = (e) => {
        e.preventDefault();

        !user.loggedIn
            ? alert("Please log in or register first!")
            : navigate("manage");
    }

    return (
        <nav className='footer-container'>
            <h1 className="call-to-action" onClick={handleCallToAction}>
                Register your car now!
            </h1>
            <div className='social-links'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/fb-icon.png" alt="fb-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/insta-icon.png" alt="insta-icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
                </a>
            </div>
            <div className="legal-links">
                <p>Privacy policy</p>
                <p>Terms & conditions</p>
            </div>
        </nav>
    )
}
