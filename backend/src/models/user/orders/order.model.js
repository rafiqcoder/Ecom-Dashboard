import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    paymentType: {
      type: String,
      enum: ["Cash on delivery", "Bkash"],
    },
    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
    products: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "User id is required"],
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "Product id is required"],
        },
        quantity: {
          type: Number,
          default: 1,
          required: [true, "Product quantity is required"],
        },
      },
    ],
    shippingAddress: {
      type: String,
      default: "",
      required: [true, "Shipping address is required"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
    },
  },
  { timestamps: true },
);
const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;
