import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    price: {
        type: Number,
        min: 0,
        Default:0,
        required: true
    },
    manufacturedDate: {
        type: Date,
        required: true
    },
    stocks: {
        type: Number,
        default: 0
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true})

export const Product = mongoose.model('Product',productSchema)