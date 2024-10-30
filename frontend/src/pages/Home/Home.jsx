import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {

    return (
        <div className="home-container">
            <h1 className="motto">
                Follow your car's <span className="highlight">journey</span>
            </h1>

            <div className="card-container">
                <div className="manage-card">
                    <Link to="manage">
                        <img src="/icons/manage-icon.png" alt="manage-card" />
                    </Link>
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
