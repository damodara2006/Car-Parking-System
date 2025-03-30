import { Router } from "express";
import { exitparking, newParking } from "../controllers/Parking.js";
const router = Router();

router.route("/newparking").post(newParking)
router.route("/exitparking").post(exitparking)


export default router