import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from "path";

import UserModel from "./database/models/UserModel.js";
import CarModel from "./database/models/CarModel.js";
import MaintenanceModel from "./database/models/MaintenanceModel.js";

// Construct directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config files
dotenv.config({
    path: path.join(__dirname, './config/.env'),
    override: true,
});
const dbUrl = process.env.DB_URL;

const app = express();

app.use(express.json())

app.get("/api/v1/welcome", (req, res) => {
    try {
        res.status(200).json({ message: "Hello World" })
    } catch (error) {
        return res.status(500).json({ message: "Some error occured" })
    }
})

app.post('/api/v1/registerUser', async (req, res) => {
    try {
        const { user_name, password, email } = req.body;
        const newUser = await UserModel.signup(user_name, password, email)
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.post("/api/v1/loginUser", async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const token = await UserModel.login(user_name, password)
        return res.status(200).json(token)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.get("/api/v1/user/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const user = await UserModel.findById(_id)

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Some error occured" })
    }
})

app.post("/api/v1/createCar", async (req, res) => {
    try {
        const { userId, year, make, model, fuel_type, body_type } = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newCar = await CarModel.createCar(year, make, model, fuel_type, body_type, userId);

        user.cars.push(newCar._id);
        await user.save();

        return res.status(201).json({ message: 'Car added successfully', car: newCar });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.patch("/api/v1/updateCar/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        const car = await CarModel.findById(_id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const fieldsToUpdate = ['year', 'make', 'model', 'fuel_type', 'body_type'];
        const invalidFields = Object.keys(req.body).filter(field => !fieldsToUpdate.includes(field));

        if (invalidFields.length > 0) {
            return res.status(400).json({ message: `Field(s) ${invalidFields.join(', ')} cannot be edited.` })
        }

        fieldsToUpdate.forEach(field => {
            if (req.body[field] !== undefined) {
                car[field] = req.body[field];
            }
        });

        await car.save();
        return res.status(200).json({ message: 'Car updated successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

app.delete("/api/v1/car/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        const car = await CarModel.findById(_id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const user = await UserModel.findById(car.owner);
        if (user) {
            user.cars = user.cars.filter(carId => carId.toString() !== _id);
            await user.save();
        }

        await CarModel.findByIdAndDelete(_id);

        return res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
});

app.post("/api/v1/createMaintenanceEntry", async (req, res) => {
    try {
        const { date, title, description, cost, items, carId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(carId)) {
            return res.status(400).json({ message: "Invalid car ID format" });
        }

        const car = await CarModel.findById(carId);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const newMaintenanceEntry = await MaintenanceModel.createMaintenanceEntry(date, title, description, cost, items, carId);

        car.maintenance_data.push(newMaintenanceEntry._id);
        await car.save();

        return res.status(201).json({ message: 'Maintenance entry added successfully', entry: newMaintenanceEntry });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

async function main() {
    await mongoose.connect(dbUrl)
    app.listen(3000, () => {
        console.log("Server is running at port: 3000");
    })
}

main()
