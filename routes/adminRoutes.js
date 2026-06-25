import express from "express";


import {
getUsers,
verifyDoctor
}
from "../controllers/adminController.js";


import {protect} from "../middleware/auth.js";


const router =
express.Router();



router.get(
"/users",
protect,
getUsers
);



router.put(
"/verify/:id",
protect,
verifyDoctor
);



export default router;