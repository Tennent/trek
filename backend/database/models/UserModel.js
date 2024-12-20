import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new Schema({
    user_name: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: false},
    is_admin: { type: Boolean, default: false },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: "CarModel"
    }]
});

userSchema.statics.signup = async function (user_name, password, email) {

    if (!user_name || !password || !email) {
        throw Error("All fields must be filled")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const userExists = await this.findOne({ user_name })
    if (userExists) {
        throw Error("Username is already in use")
    }

    const emailExists = await this.findOne({ email })
    if (emailExists) {
        throw Error("Email is already in use")
    }

    const salt = bcrypt.genSaltSync(10)
    const hashed_password = bcrypt.hashSync(password, salt);

    const user = this.create({ user_name, hashed_password, email })
    return user
}

userSchema.statics.login = async function (user_name, password) {
    
    if (!user_name || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ user_name })

    if (!user) {
        throw Error("Invalid user name")
    }

    const matchPassword = bcrypt.compareSync(password, user.hashed_password)

    if (!matchPassword) {
        throw Error("Invalid login details")
    }

    const token = { loggedIn: true, admin: user.is_admin, _id: user._id, user_name: user.user_name }
    return token;
}

export default mongoose.model('user', userSchema, 'users');
