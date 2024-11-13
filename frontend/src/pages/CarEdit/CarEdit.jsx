import { useState, useEffect } from 'react'
import Modal from "react-modal";
import "./CarEdit.css";

export default function CarEdit({ carId, userCars, setUserCars, manageModalState, closeModal }) {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        fuel_type: '',
        body_type: ''
    });

    useEffect(() => {
        async function findEditedCar() {
            const car = userCars.find((car) => car._id === carId);

            if (car) {
                setFormData({
                    year: car.year,
                    make: car.make,
                    model: car.model,
                    fuel_type: car.fuel_type,
                    body_type: car.body_type
                });
            } else {
                console.error("Error finding editable car!")
            }
        }
        findEditedCar();
    }, [carId, userCars]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="edit-custom-modal" overlayClassName="edit-custom-overlay">
            <div className="car-edit-container">
                <form className='car-edit-form' onSubmit={handleFormUpdate}>
                    <label htmlFor="year">Year:</label>
                    <input id="year" name="year" type="number" value={formData.year} onChange={handleChange} />
                    <label htmlFor="make">Make:</label>
                    <input id="make" name="make" type="text" value={formData.make} onChange={handleChange} />
                    <label htmlFor="model">Model:</label>
                    <input id="model" name="model" type="text" value={formData.model} onChange={handleChange} />
                    <label htmlFor="fuel_type">Fuel Type:</label>
                    <input id="fuel_type" name="fuel_type" type="text" value={formData.fuel_type} onChange={handleChange} />
                    <label htmlFor="body_type">Body Type:</label>
                    <input id="body_type" name="body_type" type="text" value={formData.body_type} onChange={handleChange} />

                    <div className='save-btn-container'>
                        <button type="submit" className="save-button">Save</button>
                        <button type="button" onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>

                <div className="edit-modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="edit-modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
