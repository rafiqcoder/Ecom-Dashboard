import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { createNewProductController } from "../../../controller/admin/productsController/products.controller.js";
import upload from "../../../middlewares/multer/multer.middleware.js";
import { productValidate } from "../../../validations/product.validation.js";
const productsRouter = express.Router();

// create new product router
productsRouter.post(
  "/admin/create/newProduct",
  productValidate,
  identifyUser,
  upload.single("images"),
  createNewProductController,
);
// productsRouter.get("/products", getProductController);
export default productsRouter;
