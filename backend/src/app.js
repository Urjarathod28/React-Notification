import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import authRoutes from "./router/authRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT ,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})