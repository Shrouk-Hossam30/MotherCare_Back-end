import express from "express";


import {
createDoctor,
getDoctor,
getDoctors
}
from "../controllers/doctorController.js";


import {protect} from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/create",
protect,
createDoctor
);



router.get(
"/profile",
protect,
getDoctor
);



router.get(
"/all",
getDoctors
);



export default router;