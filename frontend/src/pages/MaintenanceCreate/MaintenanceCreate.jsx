import { useState } from "react";
import Modal from "react-modal";
import "./MaintenanceCreate.css";

export default function MaintenanceCreate({ manageModalState, closeModal }) {
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        description: '',
        items: [{ name: '', quantity: 0, unit_price: 0 }]
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

    return (
        <Modal isOpen={manageModalState.isOpen} onRequestClose={closeModal} className="maintenance-create-custom-modal" overlayClassName="maintenance-create-custom-overlay">
            <div className="maintenance-create-container">
                <form className='maintenance-create-form'>
                    <label htmlFor="date">Date:</label>
                    <input id="date" name="date" type="date" required value={formData.date} onChange={handleChange} />
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" required value={formData.title} onChange={handleChange} />
                    <label htmlFor="description">Description:</label>
                    <input id="description" name="description" type="text" value={formData.description} onChange={handleChange} />
                    <label htmlFor="items">Items:</label>
                    {formData.items.map((item, index) => (
                        <div key={index} className="item-input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Item Name"
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
                            <button type="button">Remove</button>
                        </div>
                    ))}
                    <button type="button">Add Item</button>

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