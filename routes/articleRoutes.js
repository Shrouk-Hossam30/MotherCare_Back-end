import express from "express";


import {
createArticle,
recommendedArticles
}
from "../controllers/articleController.js";


import {protect}
from "../middleware/auth.js";


import {allowRoles}
from "../middleware/role.js";


const router =
express.Router();



router.post(
"/",
protect,
allowRoles("admin"),
createArticle
);



router.get(
"/recommended",
protect,
allowRoles("mother"),
recommendedArticles
);



export default router;