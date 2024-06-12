import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    noOfDoctors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    noOfPatients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    curedPatients: {
        type: Number,
        required: true
    }
},{timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema)