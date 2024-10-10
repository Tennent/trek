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
    }],
    car: {
        type: Schema.Types.ObjectId,
        ref: "CarModel",
        required: true
    }
});

maintenanceSchema.statics.createMaintenanceEntry = async function (date, titel, description, cost, items, car) {
    if (!date || !titel || !cost || !car) {
        throw Error("All mandatory fields must be filled");
    };

    const maintenance = this.create({ date, titel, description, cost, items, car });
    return maintenance;
}

export default mongoose.model('maintenance', maintenanceSchema, 'maintenances');
