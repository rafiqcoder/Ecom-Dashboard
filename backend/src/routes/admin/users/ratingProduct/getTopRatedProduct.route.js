import express from "express";
import { getTopRatedProductController } from "../../../../controller/users/ratingProduct/getTopRatedProduct.controller.js";
import { identifyUser } from "../../../../middlewares/auth.middlewares.js";

const getRatingProductRouter = express.Router();
// rating product by user
getRatingProductRouter.get("/products/topRated", getTopRatedProductController);

export default getRatingProductRouter;