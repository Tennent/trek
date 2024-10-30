export default function Save() {
    return (
        <div className='save-container'>
            <div className="save-title">
                <h1>SAVE</h1>
            </div>

            <div className="save-vehicle-card">
                <img className="save-brand-logo" src="./dummy-user-brand.png" alt="user-car-brand" />
                <h2 className="save-car-identifier">
                    Car Identifier Placeholder
                </h2>
            </div>

            <div className="save-card-container">
                <div className="save-maintenance-card">
                    <h2 className="save-maintenance-title">
                        Maintenance
                    </h2>
                    <div className="save-maintenance-period-container">
                        <p className="save-maintenance-period">
                            Weekly
                        </p>
                        <p className="save-maintenance-period">
                            Monthly
                        </p>
                        <p className="save-maintenance-period">
                            Yearly
                        </p>
                    </div>
                    <div className="save-maitenance-details-container">
                        <ul className="save-maintenance-details-list">
                            <li className="save-maintenance-detail-title">
                                Service
                            </li>
                            <li className="save-maintenance-detail-item">
                                Scheduled
                            </li>
                            <li className="save-maintenance-detail-item">
                                Unscheduled
                            </li>
                        </ul>
                    </div>
                    <div className="save-maintenance-chart"></div>
                </div>

                <div className="save-operation-card">
                    <h2 className="save-operation-title">
                        Operation
                    </h2>
                    <div className="save-operation-period-container">
                        <p className="save-operation-period">
                            Weekly
                        </p>
                        <p className="save-operation-period">
                            Monthly
                        </p>
                        <p className="save-operation-period">
                            Yearly
                        </p>
                    </div>
                    <div className="save-operation-details-container">
                        <ul className="save-operation-details-list">
                            <li className="save-operation-detail-title">
                                Fuel
                            </li>
                            <li className="save-operation-detail-title">
                                Parking
                            </li>
                            <li className="save-operation-detail-title">
                                Tax
                            </li>
                            <li className="save-operation-detail-title">
                                Insurance
                            </li>
                            <li className="save-operation-detail-title">
                                Fine
                            </li>
                            <li className="save-operation-detail-item">
                                Parking
                            </li>
                            <li className="save-operation-detail-item">
                                Speeding
                            </li>
                            <li className="save-operation-detail-item">
                                Other
                            </li>
                        </ul>
                    </div>
                    <div className="save-operation-chart"></div>
                </div>
            </div>
        </div>
    )
}