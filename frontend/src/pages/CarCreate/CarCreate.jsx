import { useState } from "react";
import Modal from "react-modal";
import createCar from "../../services/createCar";
import "./CarCreate.css";

export default function CarCreate({ userId, userCarIds, setUserCarIds, manageModalState, closeModal }) {
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const carDetails = {
                userId: userId,
                ...formData
            }

            const createdCar = await createCar(carDetails);
            const createdCarId = createdCar.car._id;

            setUserCarIds([
                ...userCarIds,
                createdCarId
            ]);
            closeModal();
        } catch (error) {
            console.error("Error creating car:", error);
        }
    }

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="create-custom-modal" overlayClassName="create-custom-overlay">
            <div className="car-create-container">
                <form className='car-create-form' onSubmit={handleFormSubmit}>
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
