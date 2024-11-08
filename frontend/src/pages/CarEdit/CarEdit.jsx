import Modal from "react-modal";

export default function CarEdit({ carId, userCars, setUserCars, manageModalState, closeModal }) {
    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="custom-modal" overlayClassName="custom-overlay">
            <div className="car-edit-container">
                <form className='car-edit-form'>
                    <label htmlFor="car-year">Year:</label>
                    <input id="car-year" name="car-year" type="number" />
                    <label htmlFor="car-make">Make:</label>
                    <input id="car-make" name="car-make" type="text" />
                    <label htmlFor="car-model">Model:</label>
                    <input id="car-model" name="car-model" type="text" />
                    <label htmlFor="car-fuel">Fuel Type:</label>
                    <input id="car-fuel" name="car-fuel" type="text" />
                    <label htmlFor="car-body">Body Type:</label>
                    <input id="car-body" name="car-body" type="text" />

                    <div className='save-btn-container'>
                        <button type="submit" className="save-button">Save</button>
                        <button onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>

                <div className="modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
