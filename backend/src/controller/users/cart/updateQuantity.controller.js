import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";

export const updateQuantityController = async (req, res) => {
  const user = req.user;
  const productId = req.params?.productId;
  const state = req.body;
  if (!productId) {
    return res.status(406).json({
      message: "Please provide productId",
      success: false,
    });
  }
  // check product is exist or not exist
  const productStock = await productModel.findById(productId);

  // find product and update
  const product = await cartModel.findOneAndUpdate({
    productId,
    userId: user._id,
  });
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }
  if (
    state.state === "increase" &&
    product.quantity < productStock.stockQuantity
  ) {
    product.quantity += 1;
    product.save();
  } else if (state.state === "decrease" && product.quantity > 1) {
    product.quantity -= 1;
    product.save();
  }
  const jsonMsg = {
    message: "Successfully added to you cart",
    success: true,
    product,
  };
  if (product.quantity === productStock.stockQuantity) {
    jsonMsg.message = "You reached maximum stock quantity of this product";
  }
  return res.status(200).json(jsonMsg);
};
