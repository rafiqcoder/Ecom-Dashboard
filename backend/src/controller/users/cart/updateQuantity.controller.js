// update product quantity of cart
import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";

export const updateQuantityController = async (req, res) => {
  const user = req.user;
  const productId = req.params?.productId;
  //  increase or decrease in state variable
  const state = req.body;
  if (!productId) {
    return res.status(406).json({
      message: "Please provide productId",
      success: false,
    });
  }
  // check product is exist or not exist
  const productStock = await productModel.findById(productId);
  // check if product out of stock
  if (productStock?.stockQuantity === 0) {
    return res.status(400).json({
      message: "This product is out of stock",
      success: false,
    });
  }
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
  // check product quantity increase or decrease
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
  // response json
  const jsonMsg = {
    message: "Successfully update product quantity",
    success: true,
    product,
  };
  if (product.quantity === productStock.stockQuantity) {
    jsonMsg.message = "You reached maximum stock quantity of this product";
  }
  return res.status(200).json(jsonMsg);
};
