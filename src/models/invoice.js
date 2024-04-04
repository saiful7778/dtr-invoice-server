import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    invoiceID: {
      type: String,
      required: [true, "Invoice id required"],
    },
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    customenrAddress: {
      type: String,
      required: [true, "Customer address is required"],
    },
    products: [
      {
        productName: {
          type: String,
          required: [true, "Product name is required"],
        },
        quantity: {
          type: Number,
          required: [true, "Product quantity is required"],
        },
        price: { type: Number, required: [true, "Product price is required"] },
        totalPrice: {
          type: Number,
          required: [true, "Total price is required"],
        },
      },
    ],
  },
  { timestamps: true }
);

export const invoiceModel = mongoose.model("invoice", invoiceSchema);
