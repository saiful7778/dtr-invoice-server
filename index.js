import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "Server is running" });
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
