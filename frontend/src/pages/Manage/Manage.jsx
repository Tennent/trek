import { useState } from "react";
import "./Manage.css";

function UserCarList({ cars }) {
    return (
        <div className="manage-card-container-list">
            {cars.map((car, index) => (
                <div key={car._id || index} className="card-container">
                    <img className="card-image" src="./dummy-user-car.png" alt="user-car-image" />
                    <div className="card-list-container">
                        <ul className="card-list">
                            <li>NICKNAME:</li>
                            <li>YEAR: {car.year}</li>
                            <li>MAKE: {car.make}</li>
                            <li>MODEL: {car.model}</li>
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
            ))}
        </div>
    );
};

export default function Manage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='manage-container'>
            <div className="manage-title">
                <h1>MANAGE</h1>
            </div>

            <div
                className="add-item-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="add-item"
                    src={isHovered ? './icons/manage-add-item-icon-hover.png' : './icons/manage-add-item-icon.png'}
                    alt="add-item-icon"
                />
            </div>

        </div>
    )
}