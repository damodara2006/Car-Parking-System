import express from "express"
import {Server} from "socket.io"
import http from "http"

const app = express();
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        credentials:true
    }
})
let a = "hello"
io.on("connection", (socket) => {
    console.log("connected", socket.id);
    socket.emit("getmessage",
       a
    )
    socket.on("disconnect", () => {
        console.log("Disconnetec", socket.id);
    });
});


export{io ,app ,server}