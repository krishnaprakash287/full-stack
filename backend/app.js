import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middleware

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],      
    credentials: true,              
  })
);

app.use(express.json());

// Routes
app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "HELLO WORLD AGAIN" });
});

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
