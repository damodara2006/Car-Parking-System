import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
import multer from "multer"
import { AsyncHanlder } from '../utils/Handler.js';
dotenv.config({
    path:".env"
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


cloudinary.config({ 
    cloud_name: 'dmbiqpg0z', 
    api_key: '777934722256838', 
    api_secret: `${process.env.Cloudinary_API}`
}); 

// const imageupload = AsyncHanlder(async(req,res)=>{
//     const file = req.files
//   const image = (await cloudinary.uploader.upload(file[0].path)).secure_url
//   res.send
// })

export {cloudinary ,upload }