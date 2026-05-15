import productModel from "../../../models/admin/createProducts/products.model.js";

export const removeProductControllerByAdmin = async (req, res) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(406).json({
      message: "Only admin can remove products",
      success: false,
    });
  }
  const productId = req.params.productId;
  if (!productId) {
    return res.status(400).json({
      message: "Please provide valid product id",
      success: false,
    });
  }
  const product = await productModel.findByIdAndDelete(productId);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }
  return res.status(200).json({
    message: "Successfully deleted",
    success: true,
    product,
  });
};
