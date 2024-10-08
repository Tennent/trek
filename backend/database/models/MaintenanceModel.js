import mongoose, { Schema } from "mongoose";

const maintenanceSchema = new Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String },
    cost: { type: Number, required: true },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "ItemModel",
        required: true
    }]
});

export default mongoose.model('maintenance', maintenanceSchema, 'maintenances');
