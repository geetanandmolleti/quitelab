import express from "express";
import Order from "../models/Order.js";
import { protect } from "../routes/auth.js";

const router = express.Router();

/* CREATE ORDER */
router.post("/", protect, async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body;

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount,
      shippingAddress,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Order creation failed" });
  }
});

/* GET MY ORDERS */
router.get("/my", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;
