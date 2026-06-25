import express from "express";

import {
createAppointment,
getAppointments,
updateAppointment
}
from "../controllers/appointmentController.js";


import {protect} from "../middleware/auth.js";


const router =
express.Router();



router.post(
"/create",
protect,
createAppointment
);



router.get(
"/",
protect,
getAppointments
);



router.put(
"/:id",
protect,
updateAppointment
);



export default router;