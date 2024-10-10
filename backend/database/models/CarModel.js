import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    fuel_type: { type: String, required: true },
    body_type: { type: String, required: true },
    maintenance_data: [{ 
        type: Schema.Types.ObjectId,
        ref: "MaintenanceModel"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "UserModel",
        required: true
    }
});

carSchema.statics.createCar = async function (year, make, model, fuel_type, body_type, owner) {
    if (!year || !make || !model || !fuel_type || !body_type || !owner) {
        throw Error("All fields must be filled");
    };

    const car = this.create({ year, make, model, fuel_type, body_type, owner });
    return car;
}

export default mongoose.model('car', carSchema, 'cars');
