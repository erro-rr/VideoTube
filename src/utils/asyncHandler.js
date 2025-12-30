const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }



// High order function 
// const asyncHandler = ()=>{};

// const asyncHandler = (func) =>{()=>{}};
// same as above
// const asyncHandler = (func) => ()=> {}

// if i have to make async
// const asyncHandler = (func) => async()=>{}   

// const asyncHandler = (fn) => async(req, res, next) =>{
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }