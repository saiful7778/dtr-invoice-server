import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { product } from "./src/routes/product.js";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 5001;
const dbUrl = process.env.DB_CONNECT;
(async () => {
  try {
    console.log("connecting...");
    await mongoose.connect(dbUrl);
    console.log("connected DB");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
})();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "Server is running" });
});

app.use("/product", product);

app.listen(port, () => {
  console.log("server is running on port:", port);
});
