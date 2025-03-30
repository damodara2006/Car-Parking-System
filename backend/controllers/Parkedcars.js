import { ParkingSchema } from "../models/newparking.js";
import { AsyncHanlder } from "../utils/Handler.js";

const Parkedcars = AsyncHanlder(async(req,res)=>{
    const allcars = await ParkingSchema.find()
    return res.send(allcars)
})

export default Parkedcars