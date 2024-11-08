import { useState } from 'react'
import Modal from "react-modal";

export default function CarEdit({ carId, userCars, setUserCars, manageModalState, closeModal }) {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        fuel_type: '',
        body_type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="custom-modal" overlayClassName="custom-overlay">
            <div className="car-edit-container">
                <form className='car-edit-form'>
                    <label htmlFor="car-year">Year:</label>
                    <input id="car-year" name="car-year" type="number" value={formData.year} onChange={handleChange} />
                    <label htmlFor="car-make">Make:</label>
                    <input id="car-make" name="car-make" type="text" value={formData.make} onChange={handleChange} />
                    <label htmlFor="car-model">Model:</label>
                    <input id="car-model" name="car-model" type="text" value={formData.model} onChange={handleChange} />
                    <label htmlFor="car-fuel">Fuel Type:</label>
                    <input id="car-fuel" name="car-fuel" type="text" value={formData.fuel_type} onChange={handleChange} />
                    <label htmlFor="car-body">Body Type:</label>
                    <input id="car-body" name="car-body" type="text" value={formData.body_type} onChange={handleChange} />

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
