import { io ,app , server } from "./app.js";
import MONGODB from "../mongodb/index.js";
import router from "../router/index.js";

await MONGODB()

app.use('/',router)

server.listen(8080,()=>{
    console.log(`Server running at :8080`)
})

