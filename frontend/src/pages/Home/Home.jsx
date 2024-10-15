import './Home.css'

export default function Home() {

    return (
        <div className="home-container">
            <h1 className="motto">
                Follow your car's <span className="highlight">journey</span>
            </h1>

            <div className="card-container">
                <div className="manage-card">
                    <img src="/icons/manage-icon.png" alt="manage-card" />
                </div>
                <div className="track-card">
                    <img src="/icons/track-icon.png" alt="track-card" />
                </div>
                <div className="save-card">
                    <img src="/icons/save-icon.png" alt="save-card" />
                </div>
            </div>
        </div>
    )
}
