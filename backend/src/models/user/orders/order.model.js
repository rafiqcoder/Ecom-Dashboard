import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    paymentType: {
      type: String,
      required: [true, "payment type is required"],
      enum: ["cashOnDelivery", "bkash"],
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
        // userId: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   required: [true, "User id is required"],
        // },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "Product id is required"],
        },
        quantity: {
          type: Number,
          default: 1,
          required: [true, "Product quantity is required"],
        },
        title: {
          type: String,
          required: [true, "title is required"],
        },
        image: {
          type: String,
          required: [true, "Image is required"],
        },
        price: {
          type: Number,
          required: [true, "Price is required"],
        },
        subTotal: {
          type: Number,
          required: [true, "Sub total is required"],
        },
      },
    ],
    // shippingAddress: {
    //   type: String,
    //   default: "",
    //   required: [true, "Shipping address is required"],
    // },
    // mobile: {
    //   type: String,
    //   required: [true, "Mobile number is required"],
    // },
    tax: {
      type: Number,
    },
    shippingCost: {
      type: Number,
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
    paymentStatus: {
      type: String,
      required: [true, "Payment status is requried"],
      enum: ["pending", "paid", "failed", "refunded"],
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Address id is required"],
      ref: "addresses",
    },
  },
  { timestamps: true },
);
const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;
