import { io ,app , server } from "./app.js";
import MONGODB from "../mongodb/index.js";

await MONGODB()

server.listen(8080,()=>{
    console.log(`Server running at :8080`)
})



// app.listen(8081,()=>{
//     console.log("Server running at :8081")
// })