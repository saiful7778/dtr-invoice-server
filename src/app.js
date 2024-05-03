import express from "express";
import cors from "cors";
import products, { product } from "./routes/product.js";
import { invoice } from "./routes/invoice.js";

export default function mainApp() {
  const app = express();

  app.use(
    cors({
      origin: ["https://dtr-invoice.vercel.app", "http://localhost:3000"],
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send({ success: true, message: "Server is running" });
  });

  app.use("/product", product);
  app.use("/products", products);
  app.use("/invoice", invoice);

  return app;
}
