import { Router } from "express";
import serverHelper from "../utils/server-helper.js";
import { productModel } from "../models/product.js";

const route = Router();
const routeAll = Router();

routeAll.get("/", (req, res) => {
  serverHelper(async () => {
    const data = await productModel.find({}, { __v: 0 });
    res.status(200).send({
      success: true,
      data,
    });
  }, res);
});

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

export default routeAll;
export { route as product };
