import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from "path";

import UserModel from "./database/models/UserModel.js";

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

async function main() {
    await mongoose.connect(dbUrl)
    app.listen(3000, () => {
        console.log("Server is running at port: 3000");
        
    })
}

main()
