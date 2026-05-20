import mongoose from "mongoose";

const ratingProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: [true, "Product ID is required for rating a product"],
    },
    userId: {
      type: String,
      required: [true, "User ID is required for rating a product"],
    },
    rating: {
      type: Number,
      required: [true, "Rating value is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"]
    },
    comment: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);
const RatingProductModel = mongoose.model("RatingProduct", ratingProductSchema);
export default RatingProductModel;