import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.config.js"
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import passwordRoutes from "./src/routes/password.routes.js";
import cors from "cors";

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

connectDb();
server.use(cors());
server.use(express.json());


server.use("/auth", authRoutes);
server.use("/user", userRoutes);
server.use("/password", passwordRoutes);


server.listen(port, () =>{
    console.log(`Server Is Running at : ${port}`);
})