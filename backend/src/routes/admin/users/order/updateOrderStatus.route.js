// update order status using order id like pending order complete order

import express from "express";
import { identifyUser } from "../../../../middlewares/auth.middlewares.js";
import { updateOrderStatusController } from "../../../../controller/admin/users/updateOrderStatus.controller.js";
const updateOrderStatusRouter = express.Router();
updateOrderStatusRouter.patch(
  "/update/orderStatus/:orderId",
  identifyUser,
  updateOrderStatusController,
);
export default updateOrderStatusRouter;
