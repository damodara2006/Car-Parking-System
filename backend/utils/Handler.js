class ApiError extends Error{
    constructor(message){
     super(message)
    }
}

const AsyncHanlder = (requestedfunction) => async(req,res,next)=>{
    try {
       return await requestedfunction(req,res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export {ApiError , AsyncHanlder}