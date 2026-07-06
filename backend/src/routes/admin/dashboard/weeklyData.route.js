import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { weeklyDataController } from "../../../controller/admin/dashboard/weeklyData.controller.js";

const weeklyData = express.Router(); 

weeklyData.get('/admin/dashboard/weeklyData', identifyUser, weeklyDataController);

export default weeklyData;