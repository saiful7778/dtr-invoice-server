import { Router } from "express";
import serverHelper from "../utils/server-helper.js";
import { productModel } from "../models/product.js";
import inputCheck from "../utils/input-check.js";

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
  const { image, productName, quantity, cost, sell } = productData;

  const check = inputCheck([image, productName, quantity, cost, sell], res);
  if (!check) {
    return;
  }
  const { url, alt } = image;
  const check2 = inputCheck([url, alt], res);
  if (!check2) {
    return;
  }

  serverHelper(async () => {
    const data = await productModel.create(productData);
    res.status(201).send({
      success: true,
      data,
    });
  }, res);
});

route.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  serverHelper(async () => {
    const data = await productModel.findOne({ _id: productId }, { __v: 0 });
    res.status(201).send({
      success: true,
      data,
    });
  }, res);
});

route.patch("/:productId", (req, res) => {
  const productId = req.params.productId;
  const productData = req.body;
  serverHelper(async () => {
    const data = await productModel.updateOne({ _id: productId }, productData, {
      upsert: true,
    });
    res.status(201).send({
      success: true,
      data,
    });
  }, res);
});

route.delete("/:productId", (req, res) => {
  const productId = req.params.productId;
  serverHelper(async () => {
    const data = await productModel.deleteOne({ _id: productId });
    res.status(201).send({
      success: true,
      data,
    });
  }, res);
});

export default routeAll;
export { route as product };
