import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit_price: { type: Number, required: true }
});

export default mongoose.model('item', itemSchema, 'items');
