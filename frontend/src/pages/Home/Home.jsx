import { Link } from 'react-router-dom'
import './Home.css'

export default function Home({ user }) {

    const loginRegisterAlert = () => {
        return alert("Please log in or register first!");
    };

    return (
        <div className="home-container">
            <h1 className="motto">
                Follow your car's <span className="highlight">journey</span>
            </h1>

            <div className="card-container">
                <div className="manage-card">
                    {user.loggedIn ? (
                        <Link to="manage">
                            <img src="/icons/manage-icon.png" alt="manage-card" />
                        </Link>
                    ) : (
                        <img
                            src="/icons/manage-icon.png"
                            alt="manage-card"
                            onClick={loginRegisterAlert}
                        />
                    )}
                </div>
                <div className="track-card">
                    <Link to="track">
                        <img src="/icons/track-icon.png" alt="track-card" />
                    </Link>
                </div>
                <div className="save-card">
                    <Link to="save">
                        <img src="/icons/save-icon.png" alt="save-card" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
