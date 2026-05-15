import express from "express";
import { dashboardController } from "../../../controller/admin/dashboard/dashboard.controller.js";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";

const dashboardRoter = express.Router();
dashboardRoter.get("/admin/dashboard/data", identifyUser, dashboardController);

export default dashboardRoter;
