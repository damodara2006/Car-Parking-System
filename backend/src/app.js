import express from "express"
import {Server} from "socket.io"
import http from "http"
import { upload } from "../controllers/Cloudinary.js";
import cors from "cors"
const app = express();
app.use(express.json())
const server = http.createServer(app)

app.use(cors({
    origin:["http://localhost:5173","https://car-parking-system-frontend.onrender.com"],
    credentials:true
}))

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173","https://car-parking-system-frontend.onrender.com"],
        credentials:true
    }
})
io.on("connection", (socket) => {
    console.log("connected", socket.id);
    socket.emit("getmessage",
       "Hello connected"
    )
    socket.on("disconnect", () => {
        console.log("Disconnetec", socket.id);
    });
});


export{io ,app ,server}