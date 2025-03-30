import { Router } from "express";
import { exitparking, newParking } from "../controllers/Parking.js";
import {  upload } from "../controllers/Cloudinary.js";
import Parkedcars from "../controllers/Parkedcars.js";
const router = Router();

router.route("/newparking").post( upload.any(), newParking)
router.route("/exitparking").post(exitparking)
router.route("/getparkedcars").get(Parkedcars)
// router.route("/carimage" ).post(upload.any(), imageupload)

export default router