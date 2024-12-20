import { useState } from "react";
import Modal from "react-modal";
import createMaintenanceEntry from "../../services/createMaintenanceEntry";
import "./MaintenanceCreate.css";

export default function MaintenanceCreate({ manageModalState, closeModal }) {
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        description: '',
        items: [{ name: '', quantity: '', unit_price: '' }]
    });
    const [totalCost, setTotalCost] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleItemChange = (index, event) => {
        const { name, value } = event.target;
        const updatedItems = formData.items.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );

        setFormData({ ...formData, items: updatedItems });
        setTotalCost(calculateTotalCost(updatedItems));
    };

    const calculateTotalCost = (items) => {
        return items.reduce((total, item) =>
            total + (item.quantity * item.unit_price || 0), 0
        );
    };

    const addItem = () => {
        const updatedItems = [...formData.items, { name: '', quantity: '', unit_price: '' }];
        setFormData({ ...formData, items: updatedItems });
        setTotalCost(calculateTotalCost(updatedItems));
    };

    const removeItem = (index) => {
        const updatedItems = formData.items.filter((_, i) => i !== index);
        setFormData({ ...formData, items: updatedItems });
        setTotalCost(calculateTotalCost(updatedItems));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const entryDetails = {
                carId: manageModalState.selectedCarId,
                cost: totalCost,
                ...formData
            }

            await createMaintenanceEntry(entryDetails);
            closeModal();
        } catch (error) {
            console.error("Error creating maintenance entry:", error);
        }
    };

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="maintenance-create-custom-modal" overlayClassName="maintenance-create-custom-overlay">
            <div className="maintenance-create-container">
                <form className='maintenance-create-form' onSubmit={handleFormSubmit}>
                    <label htmlFor="date">Date:</label>
                    <input id="date" name="date" type="date" required value={formData.date} onChange={handleChange} />
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" required value={formData.title} onChange={handleChange} />
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" type="text" value={formData.description} onChange={handleChange} />
                    <label htmlFor="items">Items:</label>
                    {formData.items.map((item, index) => (
                        <div key={index} className="item-input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={item.name}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="unit_price"
                                placeholder="Unit Price"
                                value={item.unit_price}
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                            <div className="delete-maintenance-entry-option" onClick={() => removeItem(index)}>
                                <img src="./icons/manage-delete-icon.png" alt="delete-icon" />
                            </div>
                        </div>
                    ))}
                    <div className="add-maintenance-entry-option" onClick={addItem}>
                        <img src="./icons/manage-add-icon.png" alt="add-icon" />
                    </div>

                    <div className="total-cost-display">
                        <p>Total Cost: {totalCost.toFixed(0)}</p>
                    </div>

                    <div className='maintenance-create-btn-container'>
                        <button type="submit" className="create-button">Create Entry</button>
                        <button type="button" onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
