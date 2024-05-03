import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    image: {
      url: {
        type: String,
        required: [true, "Image url is required"],
      },
      alt: {
        type: String,
        required: [true, "Image alt text is required"],
      },
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Author is required"],
    },
    productName: { type: String, required: [true, "Product Name is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"] },
    cost: { type: Number, required: [true, "Cost price is required"] },
    sell: { type: Number, required: [true, "Sell price is required"] },
  },
  { timestamps: true }
);

export const productModel = model("product", productSchema);
