import "./Manage.css";

export default function Manage() {
    return (
        <div className='manage-container'>
            <div className="manage-title">
                <h1>MANAGE</h1>
            </div>

            <div className="card-container">
                <img className="card-image" src="./dummy-user-car.png" alt="user-car-image" />
                <div className="card-list-container">
                    <ul className="card-list">
                        <li>
                            NICKNAME:
                        </li>
                        <li>
                            YEAR:
                        </li>
                        <li>
                            MAKE:
                        </li>
                        <li>
                            MODEL:
                        </li>
                    </ul>
                </div>

                <div className="card-menu-container">
                    <div className="add-option">
                        <img src="./icons/manage-add-icon.png" alt="add-icon" />
                    </div>
                    <div className="edit-option">
                        <img src="./icons/manage-edit-icon.png" alt="edit-icon" />
                    </div>
                    <div className="delete-option">
                        <img src="./icons/manage-delete-icon.png" alt="delete-icon" />
                    </div>
                </div>
            </div>

            <img className="add-item" src="./icons/manage-add-item-icon.png" alt="add-item-icon" />
        </div>
    )
}