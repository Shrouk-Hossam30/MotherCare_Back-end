import express from "express";


import {
addBaby,
getBaby,
updateBaby,
deleteBaby
}
from "../controllers/babyController.js";


import {protect} from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/add",
protect,
addBaby
);



router.get(
"/:id",
protect,
getBaby
);



router.put(
"/:id",
protect,
updateBaby
);



router.delete(
"/:id",
protect,
deleteBaby
);



export default router;