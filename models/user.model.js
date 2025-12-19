import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is required!"],
        trim: true,
        minLength: 2,
        maxLength: 50   
    },
    email:{
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/,'please fill email with valid charecters']
    },
    password: {
        type: String,
        required:[true,"password is required "],
        trim: true,
        minLength: 8,
    }
},{timestamps: true});

const User = mongoose.model('User',userSchema);
export default User;