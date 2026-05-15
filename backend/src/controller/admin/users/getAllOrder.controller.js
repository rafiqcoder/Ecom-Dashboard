// get all orders by admin
import orderModel from "../../../models/user/orders/order.model.js";

export const getAllOrderController = async (req, res) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(403).json({
      message: "Only admin can get orders",
      success: false,
    });
  }
  // find all order from model
  const orders = await orderModel.find();
  res.status(200).json({
    message: "Orders fetch successfuly",
    success: true,
    orders,
  });
};
