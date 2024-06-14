import express from 'express';
import cookieParser from 'cookie-parser'
import cors from cors // CORS IS A SECURITY FEATURE WHICH DECIDES WHICH URL CAN ACCESS THE WEB PAGE RESOURCES

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true
}));

app.use(express.json({limit: "16kb"})) // THIS IS DONE BECAUSE TO PARSE THE DATA HTTP DATA INTO JSON FORMAT

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(cookieParser)