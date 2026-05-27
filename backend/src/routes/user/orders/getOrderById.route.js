import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { getOrderByIdController } from "../../../controller/users/order/getOrderById.controller.js";

const getOrderByIdRouter = express.Router();

getOrderByIdRouter.get(
  "/order/:id",
  identifyUser,
  getOrderByIdController,
);

export default getOrderByIdRouter;
