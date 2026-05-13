import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { updateQuantityController } from "../../../controller/users/cart/updateQuantity.controller.js";

const updateQuantityRouter = express.Router();
updateQuantityRouter.patch(
  "/product/update/quantity/:productId",
  identifyUser,
  updateQuantityController,
);
export default updateQuantityRouter;
