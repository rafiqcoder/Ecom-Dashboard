import express from "express";
import { removeProductController } from "../../../controller/users/cart/removeProduct.controller.js";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";

const removeProductFromCartRouter = express.Router();

removeProductFromCartRouter.delete(
  "/users/cart/product/:productId",
  identifyUser,
  removeProductController,
);

export default removeProductFromCartRouter;
