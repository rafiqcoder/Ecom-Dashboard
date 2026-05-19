// rating product by user
import express from "express";
import { identifyUser } from "../../../../middlewares/auth.middlewares.js";
import { ratingProductController } from "../../../../controller/users/ratingProduct/ratingProduct.controller.js";

const ratingProductRouter = express.Router();
// rating product by user
ratingProductRouter.post(
  "/products/rating/:productId",
  identifyUser,
  ratingProductController,
);
export default ratingProductRouter;
