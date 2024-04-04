import express from "express";
import serverHelper from "../utils/server-helper.js";
import { invoiceModel } from "../models/invoice.js";

// eslint-disable-next-line new-cap
const route = express.Router();

route.post("/", (req, res) => {
  const invoiceData = req.body;
  serverHelper(async () => {
    const data = await invoiceModel.create(invoiceData);
    res.status(201).send({ success: true, data });
  }, res);
});

export { route as invoice };
