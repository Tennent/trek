import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    fuel_type: { type: String, required: true },
    body_type: { type: String, required: true },
    maintenance_data: [{ 
        type: Schema.Types.ObjectId,
        ref: "MaintenanceModel",
        required: true 
    }]
});

export default mongoose.model('car', carSchema, 'cars');
