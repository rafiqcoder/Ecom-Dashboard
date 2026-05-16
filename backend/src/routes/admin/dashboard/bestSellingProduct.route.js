import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { bestSellingProductController } from "../../../controller/admin/dashboard/bestSellingProduct.controller.js";

const bestSellingProduct = express.Router();
bestSellingProduct.get(
  "/admin/dashboard/bestSellingProduct",
  identifyUser,
  bestSellingProductController,
);
export default bestSellingProduct;
