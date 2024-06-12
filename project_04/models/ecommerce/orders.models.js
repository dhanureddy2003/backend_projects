import mongoose, { Schema } from 'mongoose';

const orderedItemShema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product" 
    },
    quantity:{
        type: Number,
        required: true
    }
});
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum : ["SHIPPED","CANCELLED","DELIVERED"],
        default: "SHIPPED"
    },
    orderedItems: [orderedItemShema]
},{timestamps: true})

export const Orders = mongoose.model('Orders',orderSchema);