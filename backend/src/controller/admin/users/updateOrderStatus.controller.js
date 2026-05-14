import orderModel from "../../../models/user/orders/order.model.js";

export const updateOrderStatusController = async (req, res) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(403).json({
      message: "Only admin can update order status",
      success: false,
    });
  }
  const orderId = req.params?.orderId;
  const { orderStatus } = req.body;
  // check order id
  if (!orderId) {
    return res.status(406).json({
      message: "Please provide order id for update order",
      success: false,
    });
  }
  // check order
  const order = await orderModel.findByIdAndUpdate(orderId, { orderStatus });
  if (!order) {
    return res.status(400).json({
      message: "This order doesn't exist in order model",
      success: false,
    });
  }

  return res.status(200).json({
    message: "Successfully update order status",
    success: true,
    order,
  });
};
