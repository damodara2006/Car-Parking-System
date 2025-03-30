import { ParkingSchema ,ClientSchema} from "../models/newparking.js";
import { ApiError, AsyncHanlder } from "../utils/Handler.js";

const newParking = AsyncHanlder(async(req,res)=>{
    const {parkingNumber,username,carnumber,userphone,carpicture,enteredtime ,date} = req.body;
    if ([parkingNumber, username, carnumber, userphone, carpicture].some(item => !item)) {
        throw new ApiError("All fields required");
    }
    

    const freespace = await ParkingSchema.findOne({parkingnumber:parkingNumber})

    if(!freespace){
        const newpark = new ParkingSchema({
            parkingnumber:parkingNumber,
            username:username,
            carnumber:carnumber,
            userphone:userphone,
            carpicture:carpicture,
            enteredtime:enteredtime,
            date:date
        })
    
        await newpark.save()
        console.log(newpark)

        const newClient = new ClientSchema({
            username:username,
            date:date,
            parkingnumber:parkingNumber,
            carnumber:carnumber,
            userphone:userphone,
            carpicture:carpicture,
            enteredtime:enteredtime
        })
        await newClient.save()

       return res.send(newpark)
    }
    return res.send("Space occupied")

})


const exitparking = AsyncHanlder(async(req,res)=>{
    const {parkingNumber , username , carnumber , userphone , exittime , date} = req.body;

    if ([parkingNumber, username, carnumber, userphone, exittime].some(item => !item)) {
        throw new ApiError("All fields required");
    }
    const user = await ParkingSchema.findOne({parkingnumber:parkingNumber})
    
    if(!user){
        throw new ApiError("No car found")
    }

    if(username !== user.username){
        throw new ApiError("Username incorrect")
    }
    if(carnumber !== user.carnumber){
        throw new ApiError("Carnumber incorrect")
    }
    console.log(user.userphone)
    if(Number(userphone) !== user.userphone){
        throw new ApiError("Phone number incorrect")
    }
    const clientUpdate = await ClientSchema.findOneAndUpdate(
        {$and:[{date},{userphone}]},
        {$set: {exittime:exittime}},
        {new:true}
    )

    const dltuser = await ParkingSchema.findOne({parkingnumber:parkingNumber}).deleteOne()
    console.log(dltuser)




    console.log(clientUpdate)

    res.send("Thank you for visiting")
})

export{newParking, exitparking}