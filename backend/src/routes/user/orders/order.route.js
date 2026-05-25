import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { orderController } from "../../../controller/users/order/order.controller.js";
import { myOrderController } from "../../../controller/users/order/getOrder.controller.js";

const orderRouter = express.Router();
orderRouter.post("/create/orders", identifyUser, orderController);
orderRouter.get("/my-orders", identifyUser, myOrderController);
export default orderRouter;
