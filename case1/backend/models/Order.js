import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: Number,
    shippingAddress: {
      street: String,
      city: String,
      phone: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
