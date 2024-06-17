import asyncHandler from "../utils/asyncHandlers.js";

const registeredUser = asyncHandler(
    async(req,res)=>{
        return await res.status(200).json({
            message: "ok"
        })
    }
)

export default registeredUser;