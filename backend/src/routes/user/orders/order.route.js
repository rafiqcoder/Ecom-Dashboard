import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { orderController } from "../../../controller/users/order/order.controller.js";

const orderRouter = express.Router();
orderRouter.post("/create/orders", identifyUser, orderController);
export default orderRouter;
