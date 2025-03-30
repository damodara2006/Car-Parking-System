import { Schema } from "mongoose";
import mongoose from "mongoose";
const newparking = new Schema({
    parkingnumber:{
        type:Number,
        required:true
    },
    username:{
        type:String
    },
    carnumber:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    userphone:{
        type:Number,
        required:true
    },
    enteredtime:{
        type:String,
    },
    exittime:{
        type:Date
    },
    carpicture:{
        type:String
    },
})

const Clients = new Schema({
    
    username:{
        type:String
    },
    carnumber:{
        type:String,
        required:true
    },
    parkingnumber:{
        type:Number
    },
    date:{
        type:String
    },
    userphone:{
        type:Number,
        required:true
    },
    enteredtime:{
        type:String,
    },
    carpicture:{
        type:String
    },
    exittime:{
        type:String
    },
    exitdate:{
        type:String,
        default:"Not yet"
    }
})

const ParkingSchema = mongoose.model("Parkedcars", newparking);
const ClientSchema = mongoose.model("client",Clients);

export {ParkingSchema , ClientSchema}