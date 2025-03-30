class ApiError extends Error{
    constructor(statusCode,message){
     super(message)
     this.statusCode = statusCode;
    }
}

const AsyncHanlder = (requestedfunction) => async(req,res,next)=>{
    try {
       return await requestedfunction(req,res)
    } catch (error) {
        next(error)
    }
}

export {ApiError , AsyncHanlder}