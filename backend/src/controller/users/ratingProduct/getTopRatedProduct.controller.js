import productModel from "../../../models/admin/createProducts/products.model.js";
import RatingProductModel from "../../../models/user/ratingProduct/ratingProduct.model.js";

export async function getTopRatedProductController(req, res) {

  // Logic to get top rated products

  const topRated = await RatingProductModel.find({
    rating: { $gte: 3 },
  });

  if (!topRated || topRated.length === 0) {
    return res.status(404).json({
      message: "No top rated products found",
      success: false,
      err: "No top rated products found",
    });
  }

  const products = await productModel.find({
    _id: { $in: topRated.map((item) => item.productId) },
  });
  if(!products || products.length === 0){
    return res.status(404).json({
      message: "No products found",
      success: false,
      err: "No products found",
    });
  }

  // add ratings array inside products
  const withRating = products.map((item) => {
  return {
    ...item.toObject(),

    ratings: topRated.filter(
      (rate) =>
        rate.productId.toString() === item._id.toString()
    ),
  };
});

  console.log(withRating);

  return res.status(200).json({
    message: "Top rated products fetched successfully",
    success: true,
    products: withRating,
  });
}
