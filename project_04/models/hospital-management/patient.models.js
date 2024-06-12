import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['M','F','O'], //    ENUM IS A SPECIAL TYPE WHERE USER CAN ONLY CHOOSE THE GIVEN VALUE IF ANY MISTAKES THEN THE VALUE WILL NOT BE TAKEN
        required: true
    },
    address: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
},{timestamps: true})

export const Patient = mongoose.model('Patient',patientSchema)