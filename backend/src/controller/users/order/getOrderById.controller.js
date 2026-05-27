import orderModel from "../../../models/user/orders/order.model.js";

export const getOrderByIdController = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  if (!id) {
    return res.json({
      success: false,
      message: "Order id is required",
    });
  }

  // check user has orders
  const order = await orderModel.findOne({ _id: id, userId: user._id });
  if (!order) {
    return res.json({
      success: false,
      message: "Order not found",
    });
  }
  return res.json({
    success: true,
    message: "Order found",
    order,
  });
};
