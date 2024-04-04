import express from "express";
import serverHelper from "../utils/server-helper.js";
import { productModel } from "../models/product.js";

// eslint-disable-next-line new-cap
const route = express.Router();

route.post("/", (req, res) => {
  const productData = req.body;
  serverHelper(async () => {
    const data = await productModel.create(productData);
    res.status(201).send({
      success: true,
      data,
    });
  }, res);
});

export { route as product };
