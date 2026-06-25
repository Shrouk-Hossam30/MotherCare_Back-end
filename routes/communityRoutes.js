import express from "express";

import {
createPost,
getPosts,
likePost
}
from "../controllers/communityController.js";


import {protect} from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/",
protect,
createPost
);



router.get(
"/",
getPosts
);



router.put(
"/like/:id",
protect,
likePost
);



export default router;