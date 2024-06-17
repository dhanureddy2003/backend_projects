import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_CLOUD_APIKEY, 
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type: "auto"})
        console.log("file has been uploaded : ",response.url)
        return response; 
    } catch (error) {
        fs.unlinkSync(localFilePath);
        // IF THE FILE IS FAILED TO UPLOAD THEN THE FILE WILL BE DELETED.
    }
}