import Modal from "react-modal";
import "./MaintenanceCreate.css";

export default function MaintenanceCreate({ manageModalState, closeModal }) {

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="maintenance-create-custom-modal" overlayClassName="maintenance-create-custom-overlay">
            <div className="maintenance-create-container">
                <form className='maintenance-create-form'>
                    <label htmlFor="date">Date:</label>
                    <input id="date" name="date" type="date" required />
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" required />
                    <label htmlFor="description">Description:</label>
                    <input id="description" name="description" type="text" />
                    <label htmlFor="items">Items:</label>

                    <div className="total-cost-display">
                        <p>Total Cost: </p>
                    </div>

                    <div className='maintenance-create-btn-container'>
                        <button type="submit" className="create-button">Create Entry</button>
                        <button type="button" onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>

                <div className="maintenance-create-modal-logo-container">
                    <img src="/trek-logo.png" alt="trek-logo" className="maintenance-create-modal-logo" />
                </div>
            </div>
        </Modal>
    )
}
