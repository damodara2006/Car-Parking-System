import express from "express"
import {Server} from "socket.io"
import http from "http"
import multer from "multer"
const app = express();
const upload = multer();

app.use(express.json())
app.use(upload.any())
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
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