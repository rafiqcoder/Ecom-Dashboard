import productModel from "../../../models/admin/createProducts/products.model.js";

export const getProductController = async (req, res) => {
  const user = req.user;
  console.log(user);

  const allProducts = await productModel.find();
  if (user.role === "admin" || user.role === "user") {
    return res.status(200).json({
      message: "Product's Fetch successfully",
      success: true,
      products: allProducts,
    });
  }
  return res.status(403).json({
    message: "You don't have permission to get the data",
    success: false,
    err: "You can't get the data before you part of Luxora",
  });
};
