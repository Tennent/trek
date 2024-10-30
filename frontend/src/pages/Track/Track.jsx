export default function Track() {
    return (
        <div className='track-container'>
            <div className="track-title">
                <h1>TRACK</h1>
            </div>

            <img className="track-image" src="./dummy-user-car.png" alt="user-car-image" />

            <div className="track-info-card">
                <img className="track-brand-logo" src="./dummy-user-brand.png" alt="user-car-brand" />
                <h2 className="track-car-identifier">
                    Car Identifier Placeholder
                </h2>
            </div>

            <div className="track-details-card">
                <h3 className="track-details-title">
                    Details
                </h3>
                <div className="track-details-milage-meter">
                    <p className="track-details-milage">
                        Placeholder
                    </p>
                </div>
                <div className="track-service-details-container">
                    <p className="track-last-service">
                        Placeholder
                    </p>
                    <div className="track-last-service-chart">
                        <p className="track-last-service-counter">
                            Placeholder
                        </p>
                    </div>
                    <div className="track-inspection-chart">
                        <p className="track-inspection-counter">
                            Placeholder
                        </p>
                    </div>
                    <p className="track-inspection">
                        Placeholder
                    </p>
                </div>
            </div>

            <div className="track-histroy-card">
                <h3 className="track-histroy-title">
                    Histroy
                </h3>
                <table className="track-histroy-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Partner</th>
                            <th>Partner Address</th>
                            <th>Service Type</th>
                            <th>Description</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table rows will be added here dynamically */}
                    </tbody>
                </table>
                <a className="full-histroy-redirect" href="">
                    See full histroy
                </a>
            </div>
        </div>
    )
}