import productModel from "../../../models/admin/createProducts/products.model.js";
import RatingProductModel from "../../../models/user/ratingProduct/ratingProduct.model.js";

export const getProductController = async (req, res) => {


  const allProducts = await productModel.find();
  
  // add rating with product if rating exist
  const withRating = await Promise.all(allProducts.map(async (product) => {
    const ratings = await RatingProductModel.find({ productId: product._id });
    return { ...product.toObject(), ratings };
  }));
  // if (user.role === "admin" || user.role === "user") {
  return res.status(200).json({
    message: "Product's Fetch successfully",
    success: true,
    products: withRating,
  });
  //}
  // return res.status(403).json({
  //   message: "You don't have permission to get the data",
  //   success: false,
  //   err: "You can't get the data before you part of Luxora",
  // });
};
