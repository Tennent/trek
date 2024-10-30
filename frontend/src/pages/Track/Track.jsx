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
                        Milage Placeholder
                    </p>
                </div>
                <div className="track-service-details-container">
                    <p className="track-last-service">
                        Service Date Placeholder
                    </p>
                    <div className="track-last-service-chart">
                        <p className="track-last-service-counter">
                            Service Counter Placeholder
                        </p>
                    </div>
                    <div className="track-inspection-chart">
                        <p className="track-inspection-counter">
                            Inspection Counter Placeholder
                        </p>
                    </div>
                    <p className="track-inspection">
                        Inspection Date Placeholder
                    </p>
                </div>
            </div>

            <div className="track-history-card">
                <h3 className="track-history-title">
                    History
                </h3>
                <table className="track-history-table">
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
                        <td>Placeholder Date</td>
                        <td>Placeholder Partner</td>
                        <td>Placeholder Address</td>
                        <td>Placeholder Type</td>
                        <td>Placeholder Description</td>
                        <td>Placeholder Price</td>
                    </tbody>
                </table>
                <a className="full-history-redirect" href="">
                    See full history
                </a>
            </div>
        </div>
    )
}