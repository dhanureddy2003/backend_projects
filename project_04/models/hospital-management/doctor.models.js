import mongoose from 'mongoose';

const hospitalHours = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 25,
        max: 70,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    workExperience: {
        type: Number,
        min: 1,
        required: true
    },
    worksInHospitals: {
        type: [hospitalHours],
        required: true
    }
},{timestamps: true})

export const Doctor = mongoose.model('Doctor',doctorSchema)