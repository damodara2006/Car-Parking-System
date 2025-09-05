import { ClientSchema, ParkingSchema } from "../models/newparking.js";
import { AsyncHanlder } from "../utils/Handler.js";

const Parkedcars = AsyncHanlder(async(req,res)=>{
    const allcars = await ParkingSchema.find()
    return res.send(allcars)
})
const Parkedclients = AsyncHanlder(async(req,res)=>{
    const allcars = await ClientSchema.find()
    // console.log(allcars)
    return res.send(allcars)
})

export { Parkedcars,Parkedclients}