import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required for adding new product"],
    },
    description: {
      type: String,
      required: [
        true,
        "Product description is required for addning new product",
      ],
    },
    price: {
      type: Number,
      required: [true, "Product price is required for addning new product"],
      min: [0, "Price cannot be negative"],
    },
    discountPrice: {
      type: Number,
      default: 0,
      min: [0, "Discount price cannot be negative"],
    },
    discountStart: {
      type: Date,
    },
    discountEnd: {
      type: Date,
    },
    stockQuantity: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock quantity cannot be negative"],
      default: 0,
    },
    stockStatus: {
      type: Boolean,
      default: true,
    },
    poster: {
      type: String,
      required: [true, "Poster is required"],
    },
    // productImages: [
    //   {
    //     type: String,
    //   },
    // ],
    productCategory: [
      {
        type: String,
        required: [true, "Product Category is required"],
        trim: true,
      },
    ],
    productTag: [{ type: String, trim: true }],
  },
  { timestamps: true },
);
const productModel = mongoose.model("porducts", productSchema);
export default productModel;
