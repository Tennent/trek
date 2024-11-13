import { useState } from "react";
import Modal from "react-modal";
import "./CarCreate.css";

export default function CarCreate({ userId, userCarIds, setUserCarIds, manageModalState, closeModal }) {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        fuel_type: '',
        body_type: ''
    });

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="create-custom-modal" overlayClassName="create-custom-overlay">
            <div className="car-create-container">
                <form className='car-create-form'>
                    <label htmlFor="year">Year:</label>
                    <input id="year" name="year" type="number" value={formData.year} />
                    <label htmlFor="make">Make:</label>
                    <input id="make" name="make" type="text" value={formData.make} />
                    <label htmlFor="model">Model:</label>
                    <input id="model" name="model" type="text" value={formData.model} />
                    <label htmlFor="fuel_type">Fuel Type:</label>
                    <input id="fuel_type" name="fuel_type" type="text" value={formData.fuel_type} />
                    <label htmlFor="body_type">Body Type:</label>
                    <input id="body_type" name="body_type" type="text" value={formData.body_type} />

                    <div className='create-btn-container'>
                        <button type="submit" className="create-button">Create</button>
                        <button type="button" onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>

                <div className="create-modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="create-modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
