import RatingProductModel from "../../../models/user/ratingProduct/ratingProduct.model.js";

export async function ratingProductController(req, res) {
  const user = req.user;
  const { productId } = req.params;
  if (!productId) {
    return res.status(400).json({
      message: "Product id is required",
      success: false,
      err: "Please provide a product id to rate the product",
    });
  }
  const { rating } = req.body;
  if (!rating) {
    return res.status(400).json({
      message: "Rating is required",
      success: false,
      err: "Please provide a rating to rate the product",
    });
  }

  const ratedProduct = await RatingProductModel.create({
    productId,
    userId: user._id,
    rating,
  });
  res.status(201).json({
    message: "Product rated successfully",
    success: true,
    data: ratedProduct,
  });
}
