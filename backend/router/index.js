import { Router } from "express";
import { exitparking, newParking } from "../controllers/Parking.js";
import {  upload } from "../controllers/Cloudinary.js";
import {Parkedcars ,  Parkedclients} from "../controllers/Parkedcars.js";
import { login, newuser, logout } from "../controllers/login.js";
const router = Router();

router.route("/newparking").post( upload.any(), newParking)
router.route("/exitparking").post(exitparking)
router.route("/getparkedcars").get(Parkedcars)
router.route("/getparkedclients").get(Parkedclients)
router.route("/login").post( login);
router.route("/newuser").post(newuser);
router.route("/logout").post(logout);
// router.route("/carimage" ).post(upload.any(), imageupload)

export default router