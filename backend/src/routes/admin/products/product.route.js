import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { createNewProductController } from "../../../controller/admin/productsController/products.controller.js";
import upload from "../../../middlewares/multer/multer.middleware.js";
import { productValidate } from "../../../validations/product.validation.js";
import { getProductController } from "../../../controller/admin/productsController/getProducts.controller.js";
const productsRouter = express.Router();

// create new product router
productsRouter.post(
  "/admin/create/newProduct",
  productValidate,
  identifyUser,
  upload.single("poster"),
  createNewProductController,
);
productsRouter.get("/products", identifyUser, getProductController);
export default productsRouter;
