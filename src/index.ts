import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());

// Configure CORS for http://localhost:3000
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect("mongodb://localhost:27017/ts-pay")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

app.listen(3001, () => console.log("Server started"));
