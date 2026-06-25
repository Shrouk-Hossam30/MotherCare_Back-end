import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import connectDB from "./config/db.js";


import authRoutes 
from "./routes/authRoutes.js";

import motherRoutes 
from "./routes/motherRoutes.js";


import babyRoutes
from "./routes/babyRoutes.js";


import doctorRoutes
from "./routes/doctorRoutes.js";


import appointmentRoutes
from "./routes/appointmentRoutes.js";


import communityRoutes
from "./routes/communityRoutes.js";


import adminRoutes
from "./routes/adminRoutes.js";


import medicalRoutes
from "./routes/medicalRoutes.js";



dotenv.config();


const app =
express();



app.use(cors());

app.use(express.json());


app.use(
"/uploads",
express.static("uploads")
);



connectDB();



app.use(
"/api/auth",
authRoutes
);



app.use(
"/api/mother",
motherRoutes
);



app.use(
"/api/baby",
babyRoutes
);



app.use(
"/api/doctor",
doctorRoutes
);



app.use(
"/api/appointment",
appointmentRoutes
);



app.use(
"/api/community",
communityRoutes
);



app.use(
"/api/admin",
adminRoutes
);



app.use(
"/api/medical",
medicalRoutes
);



app.listen(
5000,
()=>console.log(
"Mother Care API Running"
)
);