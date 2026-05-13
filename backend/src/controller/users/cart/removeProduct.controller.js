import cartModel from "../../../models/user/cart/cartProduct.model.js";

export const removeProductController = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      message: "This user doesn't found",
      success: false,
    });
  }
  try {
    const productId = req.params?.productId;
    if (!productId) {
      return res.status(400).json({
        message: "Please provide product id",
        success: false,
      });
    }
    // find product and delete
    const deletedProduct = await cartModel.findOneAndDelete({
      productId,
      userId: user._id,
    });
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};
