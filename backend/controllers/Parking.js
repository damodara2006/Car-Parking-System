import { ParkingSchema ,ClientSchema} from "../models/newparking.js";
import { ApiError, AsyncHanlder } from "../utils/Handler.js";
import { cloudinary } from "./Cloudinary.js";
import fs from "fs"
const newParking = AsyncHanlder(async(req,res)=>{
    // let {carpicture} = req.body;
    // console.log(carpicture)
    const {parkingNumber,username,carnumber,userphone,enteredtime  ,date} = req.body;
    // let carpicture = req.files

    if ([parkingNumber, username, carnumber, userphone, date ].some(item => item == "undefined" || item == "" || item == null)) {
        return res.send("All fileds required")
    }
    // console.log()
    const freespace = await ParkingSchema.findOne({parkingnumber:parkingNumber})

    if(freespace){
        console.log("occupied")
       return res.send("Space occupied")
    }
    let carpicture;
    if(req.files){
      carpicture = (await cloudinary.uploader.upload(req.files[0].path)).secure_url
      fs.unlinkSync(req.files[0].path)
    }
    else{
        throw new ApiError("Car picture needed");
        
    }

    


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
   

})


const exitparking = AsyncHanlder(async(req,res)=>{
    const {parkingNumber , username , carnumber , userphone , exittime , date} = req.body;

    if ([parkingNumber, username, carnumber, userphone, exittime].some(item => !item)) {
        return res.status(201).send("All fields required");
    }
    const user = await ParkingSchema.findOne({parkingnumber:parkingNumber})
    
    if(!user){
        return res.status(201).send("No car found")
    }

    if(username !== user.username){
        return res.status(201).send("Username incorrect")
    }
    if(carnumber !== user.carnumber){
        return res.status(201).send("Carnumber incorrect")
    }
    console.log(user.userphone)
    if(Number(userphone) !== user.userphone){
        return res.status(201).send("Phone number incorrect")
    }
    const clientUpdate = await ClientSchema.findOneAndUpdate(
        { $and: [{ date }, { userphone }] }, 
        {
            $set: {
                exittime: exittime,
                exitdate: Intl.DateTimeFormat('en-IN', {
                    dateStyle: 'full',
                }).format(new Date()),
            },
        }, 
        { new: true }
    )

    const dltuser = await ParkingSchema.findOne({parkingnumber:parkingNumber}).deleteOne()
    console.log(dltuser)




    console.log(clientUpdate)

   return res.send("Thank you for visiting")
})

export{newParking, exitparking}