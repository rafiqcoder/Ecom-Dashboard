// create product update product and delete product by admin
import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { createNewProductController } from "../../../controller/admin/productsController/products.controller.js";
import upload from "../../../middlewares/multer/multer.middleware.js";
import { productValidate } from "../../../validations/product.validation.js";
import { getProductController } from "../../../controller/admin/productsController/getProducts.controller.js";
import { updateProductController } from "../../../controller/admin/productsController/updateProduct.controller.js";
import { removeProductControllerByAdmin } from "../../../controller/admin/productsController/removeProductByAdmin.controller.js";
import { getProductControllerByCategory } from "../../../controller/admin/productsController/getProductByCategory.controller.js";
const productsRouter = express.Router();

// create new product router
productsRouter.post(
  "/admin/create/newProduct",
  // productValidate,
  identifyUser,
  upload.single("poster"),
  createNewProductController,
);

// update products
productsRouter.patch(
  "/admin/products/update/:productId",
  identifyUser,
  upload.single("poster"),
  updateProductController,
);

// delete product
productsRouter.delete("/admin/products/delete/:productId", identifyUser, removeProductControllerByAdmin)

// get all products
productsRouter.get("/products", getProductController);

// get product by category
productsRouter.get("/products/category/:category", getProductControllerByCategory);
export default productsRouter;
