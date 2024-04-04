import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: [true, "Product Name is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"] },
    cost: { type: Number, required: [true, "Cost price is required"] },
    sell: { type: Number, required: [true, "Sell price is required"] },
  },
  { timestamps: true }
);

export const productModel = mongoose.model("product", productSchema);
