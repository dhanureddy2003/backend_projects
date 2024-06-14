const asyncHandler = (func) => async(req,res,next)=>{
    try {
        await func(req,res,next)
    } catch (error) {
        res.status(err.code || 400).json({
            success: true,
            message: error.message
        })
    }
}

// ANOTHER WAY TO DO SAME WORK

// const asyncHandler = (requestHandler) => (req,res,next) => {
//     Promise.then(requestHandler(req,res,next)).catch((error)=>next(error))
// }

export default asyncHandler