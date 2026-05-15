import orderModel from "../../../models/user/orders/order.model.js";

export const dashboardController = async (req, res) => {
  const user = req.user;
  // check if not admin
  if (user.role !== "admin") {
    return res.status(406).json({
      message: "Only admin can get dashboard data",
      success: false,
    });
  }

  // get total order
  let totalOrder = 0;
  const orders = await orderModel.find();
  orders.map((ord, idx) => {
    totalOrder += 1;
  });
  // get total sales
  let totalSales = 0;
  orders.map((order) => {
    totalSales += order.totalPrice;
  });
  // get pending order
  let pendingOrder = 0;
  orders.map((order) => {
    if (order.orderStatus === "pending") {
      pendingOrder += 1;
    }
  });
  // get cancelled order
  let cancelledOrder = 0;
  orders.map((order) => {
    if (order.orderStatus === "cancelled") {
      cancelledOrder += 1;
    }
  });

  // create dashboard data
  //   const data = await dashboardModel.create({
  //     totalOrder,
  //     totalSales,
  //     pendingOrder,
  //     cancelledOrder,
  //   });
  return res.status(200).json({
    message: "Dashboard data fetch success",
    success: true,
    data: {
      totalOrder,
      totalSales,
      pendingOrder,
      cancelledOrder,
    },
  });
};
