import mongoose from 'mongoose';

const userSchema = new userSchema({
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        min: 8,
        max: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 12,
        lowercase: true
    },
    photo: {
        type: String,
    }
},{timestamps : true})

export const User = mongoose.model('User',userSchema)