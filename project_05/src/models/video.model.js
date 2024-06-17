import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: [true, 'video is required']
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,  //  CLOUDINARY URL ITSELF PROVIDES THE INFO
        required: true
    },
    views: {
        type: Number,
        default: true
    },
    isPublished: {
        type: Boolean,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true,"owner is required"]
    }
},{timestamps: true})

Video.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video',videoSchema) 