import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { addToCartController } from "../../../controller/users/cart/addToCart.controller.js";
import { getCartController } from "../../../controller/users/cart/getCart.controller.js";

const cartProductRouter = express.Router();
// add to cart routes
cartProductRouter.post(
  "/users/cart/product/:productId",
  identifyUser,
  addToCartController,
);
// get product from cart routes
cartProductRouter.get("/users/cart/products", identifyUser, getCartController);
export default cartProductRouter;
