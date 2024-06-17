import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required'] // CUSTOM MESSAGE
    },
    fullName: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    avatar: {
        type: String,   // CLOUDINARY URL WHICH PROVIDES AN URL FOR STORING THE IMAGES
        required: true
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    refreshToken: {
        type: String
    }

},{timestamps: true})

/* THIS IS THE CODE WHICH IS USED TO ENCRYPT AND DECRYPT THE PASSWORD AND PRE IS A MIDDLEWARE WHICH IS USED TO RUN CODE JUST BEFORE A FUNCTION IS CALLED AND SAVE IS A TYPE WHERE IT MEANS WHEN WE SAVE IT'LL RUN. ALWAYS USE REGULAR FUNCTION RATHER THAN ARROW BECAUSE IT DOESN'T HAVE THIS REF AND 10 IS NO OF ROUNDS OF HASHING DONE ON PASSWORD. */

userSchema.pre("save", async function (next){
    if(!(this.isModified("password"))) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

// THIS .methods IS SPECIFICALLY FROM MONGOOSE TO CREATE CUSTOM METHODS , bcrypt.compare WILL COMPARE OUR PASSWORD AND ENCRYPTED PASSWORD

userSchema.methods.isPasswordCorrect = async function(password) {
 return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.refreshAccessToken = function(){
    jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model('User',userSchema);