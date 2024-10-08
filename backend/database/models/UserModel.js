import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    user_name: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: false},
    is_admin: { type: Boolean, default: false }
});

export default mongoose.model('user', userSchema, 'users');
