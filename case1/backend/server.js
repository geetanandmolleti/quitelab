// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/orders.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB Connection (NO OPTIONS)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) =>
    console.error("MongoDB connection error ❌", err.message)
  );

// Health check
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
