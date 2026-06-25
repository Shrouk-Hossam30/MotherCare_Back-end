import express from "express";


import {

createQuestion,

replyQuestion

}
from "../controllers/communityController.js";


import {protect}
from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/question",
protect,
createQuestion
);



router.put(
"/reply/:id",
protect,
replyQuestion
);



export default router;