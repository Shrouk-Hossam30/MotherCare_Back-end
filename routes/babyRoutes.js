import express from "express";

import {
addBaby
}
from "../controllers/babyController.js";


import {protect}
from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/add",
protect,
addBaby
);



export default router;