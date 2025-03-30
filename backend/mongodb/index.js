import moongose from "mongoose"
import { ApiError, AsyncHanlder } from "../utils/Handler.js"
import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config({
    path:'.env'
})


const MONGODB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.mongodb)
        console.log("Connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export default MONGODB