import { useState, useEffect } from "react";
import fetchUserCar from "../../services/fetchUserCar";
import deleteCar from "../../services/deleteCar";
import CarList from "../CarList/CarList";
import "./Manage.css";

export default function Manage({ userCarIds, setUserCarIds, userCars, setUserCars }) {
    const [isHovered, setIsHovered] = useState(false);
    const [manageModalState, setManageModalState] = useState({
        isOpen: false,
        type: "",
        selectedCarId: ""
    });

    const openModal = (type, carId) => {
        setManageModalState({
            isOpen: true,
            type,
            selectedCarId: carId
        });
    };

    const closeModal = () => {
        setManageModalState({
            isOpen: false,
            type: "",
            selectedCarId: ""
        });
    };

    async function handleDeleteCar(e, carId) {
        e.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");

        if (confirmDelete) {
            try {
                await deleteCar(carId);
                
                const updatedCarIds = userCarIds.filter(id => id !== carId);
                setUserCarIds(updatedCarIds);
                
            } catch (error) {
                console.error("Error deleting car:", error);
            }
        }
    }

    useEffect(() => {
        async function collectUserCars() {
            try {
                if (!Array.isArray(userCarIds) || userCarIds.length === 0) {
                    console.log("User has no registered cars!");
                    setUserCars([]);
                    return;
                }

                const carDetailsPromises = userCarIds.map(id => fetchUserCar(id));
                const cars = await Promise.all(carDetailsPromises);

                const validCars = cars.filter(car => car !== null);
                setUserCars(validCars);
            } catch (error) {
                console.error("Error collecting car details:", error);
                setUserCars([]);
            }
        }

        collectUserCars();
    }, [userCarIds, setUserCars]);

    return (
        <div className='manage-container'>
            <div className="manage-title">
                <h1>MANAGE</h1>
            </div>

            {userCars.length > 0
                ? <>
                    <CarList userCars={userCars} setUserCars={setUserCars} handleDeleteCar={handleDeleteCar} manageModalState={manageModalState} openModal={openModal} closeModal={closeModal} />
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
                </>
                :
                <div className="alert-card-container">
                    <img className="alert-card-image" src="./icons/alert-icon.png" alt="alert-icon" />
                    <h2>You don't have any cars registered!</h2>
                </div>
            }
        </div>
    )
}