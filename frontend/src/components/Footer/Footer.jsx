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
                <img src="/icons/fb-icon.png" alt="fb-icon" />
                <img src="/icons/insta-icon.png" alt="insta-icon" />
                <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
            </div>
            <div className="legal-links">
                <p>Privacy policy</p>
                <p>Terms & conditions</p>
            </div>
        </nav>
    )
}
