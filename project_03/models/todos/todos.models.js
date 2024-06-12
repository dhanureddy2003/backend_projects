import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: {
        type: String,
    }
},{timestamps:true})

export const Todo = mongoose.model('Todo',todoSchema);