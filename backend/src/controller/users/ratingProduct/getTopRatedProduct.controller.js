import RatingProductModel from "../../../models/user/ratingProduct/ratingProduct.model.js";

export async function getTopRatedProductController(req, res) {
  const user = req.user;

  // Logic to get top rated products

  const topRated = await RatingProductModel.find({ rating: { $gte: 3 } });
  if (!topRated || topRated.length === 0) {
    return res.status(404).json({
      message: "No top rated products found",
      success: false,
      err: "No top rated products found",
    });
  }
  return res.status(200).json({
    message: "Top rated products fetched successfully",
    success: true,
    topRated,
  });
}
