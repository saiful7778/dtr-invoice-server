import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    hashedPassword: String,
    emailVerified: Date,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    image: String,
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);
