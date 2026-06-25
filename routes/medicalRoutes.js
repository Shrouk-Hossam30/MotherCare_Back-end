import express from "express";


import {
addRecord
}
from "../controllers/medicalController.js";


import {upload}
from "../config/multer.js";


import {protect}
from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/upload",
protect,
upload.single("file"),
addRecord
);



export default router;