import cartModel from "../../../models/user/cart/cartProduct.model.js";
import orderModel from "../../../models/user/orders/order.model.js";

export const orderController = async (req, res) => {
  const user = req.user;
  const { paymentType, mobile, shippingAddress } = req.body;
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
  const cartProducts = await cartModel.find({ userId: user._id });
  if (!cartProducts) {
    res.status(404).json({
      message: "Please add product in you cart for order",
      success: true,
    });
  }
  const orders = await orderModel.create({
    userId: user._id,
    products: cartProducts,
    paymentType: paymentType,
    mobile,
    shippingAddress
  });
  return res.status(201).json({
    message: "Order created successfuly",
    success: true,
    orders,
  });
};
