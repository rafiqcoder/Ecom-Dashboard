import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
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
});

const cartModel = mongoose.model("cartProducts", cartSchema);
export default cartModel;