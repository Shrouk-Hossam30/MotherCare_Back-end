import express from "express";

import {
createMotherProfile,
getMotherProfile
}
from "../controllers/motherController.js";

import {protect} from "../middleware/auth.js";


const router=express.Router();


router.post(
"/create",
protect,
createMotherProfile
);


router.get(
"/profile",
protect,
getMotherProfile
);



export default router;