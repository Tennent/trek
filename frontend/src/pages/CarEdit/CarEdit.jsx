import { useState } from 'react'
import Modal from "react-modal";
import "./CarEdit.css";

export default function CarEdit() {
    const [carYear, setCarYear] = useState(null);
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carFuel, setCarFuel] = useState("");
    const [carBody, setCarBody] = useState("");

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal" overlayClassName="custom-overlay">
            <div className="car-edit-container">
                <form className='car-edit-form' onSubmit={handleFormSubmit}>
                    <label htmlFor="car-year">Year:</label>
                    <input id="car-year" name="car-year" type="number" value={carYear} onChange={(e) => setCarYear(e.target.value)} />
                    <label htmlFor="car-make">Make:</label>
                    <input id="car-make" name="car-make" type="text" value={carMake} onChange={(e) => setCarMake(e.target.value)} />
                    <label htmlFor="car-model">Model:</label>
                    <input id="car-model" name="car-model" type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
                    <label htmlFor="car-fuel">Fuel Type:</label>
                    <input id="car-fuel" name="car-fuel" type="text" value={carFuel} onChange={(e) => setCarFuel(e.target.value)} />
                    <label htmlFor="car-body">Body Type:</label>
                    <input id="car-body" name="car-body" type="text" value={carBody} onChange={(e) => setCarBody(e.target.value)} />
                    
                    <div className='save-btn-container'>
                        <button type="submit" className="save-button">Save</button>
                        <button onClick={onClose} className="cancel-button">Cancel</button>
                    </div>
                </form>
            
                <div className="modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
