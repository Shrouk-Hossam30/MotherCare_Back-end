import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import connectDB from "./config/db.js";


import authRoutes from "./routes/authRoutes.js";
import babyRoutes from "./routes/babyRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import motherRoutes from "./routes/motherRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import pointRoutes from "./routes/pointRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";



dotenv.config();



const app =
express();



app.use(cors());


app.use(express.json());



connectDB();



app.use(
"/api/auth",
authRoutes
);


app.use(
"/api/baby",
babyRoutes
);


app.use(
"/api/articles",
articleRoutes
);


app.use(
"/api/doctor",
doctorRoutes
);


app.use(
"/api/mother",
motherRoutes
);


app.use(
"/api/community",
communityRoutes
);


app.use(
"/api/todo",
todoRoutes
);


app.use(
"/api/points",
pointRoutes
);


app.use(
"/api/notifications",
notificationRoutes
);



app.listen(
process.env.PORT,
()=>{

console.log(
"Mother Care API Running"
)

}
);