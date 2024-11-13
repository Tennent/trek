import CarEdit from "../CarEdit/CarEdit";

export default function CarList({ userCars, setUserCars, manageModalState, openModal, closeModal }) {
    return (
        <div className="manage-card-container-list">
            {userCars.map((car) => (
                <div key={car._id} className="card-container">
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
                        <div id="edit-car" className="edit-option" onClick={() => openModal("edit-car", car._id)}>
                            <img src="./icons/manage-edit-icon.png" alt="edit-icon" />
                        </div>
                        <div className="delete-option">
                            <img src="./icons/manage-delete-icon.png" alt="delete-icon" />
                        </div>
                    </div>
                </div>
            ))}
            {manageModalState.isOpen && manageModalState.selectedCarId && (
                <CarEdit
                    carId={manageModalState.selectedCarId}
                    userCars={userCars}
                    setUserCars={setUserCars}
                    manageModalState={manageModalState}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}