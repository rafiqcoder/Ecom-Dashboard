import productModel from "../../../models/admin/createProducts/products.model.js";
import orderModel from "../../../models/user/orders/order.model.js";

export const weeklyDataController = async (req, res) => {
  const user = req.user;

  if (user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to access this route" });
  }

  // get weakly customer
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  // get from order model
  const weakly_customer = await orderModel.find({
    createdAt: {
      $gte: startOfWeek,
    },
  });

  // get all product filter by weakly
  const weakly_product = await productModel.find({
    createdAt: {
      $gte: startOfWeek,
    },
  });

  // get stock product by weakly
  const stock_product = await productModel.find({
    createdAt: {
      $gte: startOfWeek,
    },
    stockStatus: true,
  });

  // get out of stock product from store
  const out_of_stock_product = await productModel.find({
    createdAt: {
      $gte: startOfWeek,
    },
    stockStatus: false,
  });

  // get weakly total revenue
  const weakly_revenue = await orderModel.find({
    createdAt: {
      $gte: startOfWeek,
    },
    paymentStatus: "paid",
  });

  // store all data in a object
  const weaklyData = {
    weakly_customer: weakly_customer,
    weakly_product: weakly_product,
    stock_product: stock_product,
    out_of_stock_product: out_of_stock_product,
    weakly_revenue: weakly_revenue,
  };
  return res.status(200).json({
    message: "Weekly data fetched successfully",
    success: true,
    data: weaklyData,
  });
};
