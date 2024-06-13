import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
})

connectDB(); //     THIS IS IMPORTED FROM DB DIRECTORY


/*

    THIS IS THE FIRST APPROACH WHERE ITS WRITTEN STRAIGHT IN INDEXJS FILE BUT THE BETTER APPROACH WOULD BE KEEPING ALL THESE CONNECTION FILE INSIDE DB FOLDER AND INDEXJS FILE

import express from 'express';

app = express();

;( async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.listen(process.env.PORT,()=>{
        console.log(`APP IS LISTENING ${process.env.PORT}`)
       })
    } catch(error) {
        console.log("ERROR",error)
        throw err
    }
})()    // THIS IS A BETTER APPROACH OF CALLING FUNCTION IMMEDIATELY AFTER THE DEFINITION..

*/