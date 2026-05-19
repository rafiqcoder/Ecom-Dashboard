// get all order for admin

import express from "express";
import { getAllOrderController } from "../../../../controller/admin/users/getAllOrder.controller.js";
import { identifyUser } from "../../../../middlewares/auth.middlewares.js";
const getAllOrderRouter = express.Router();
getAllOrderRouter.get("/admin/get/orders", identifyUser, getAllOrderController);

export default getAllOrderRouter;
