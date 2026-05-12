import express from "express";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { getUsersController } from "../../../controller/users/getUsers.controller.js";

const getAllUserRouter = express.Router();

getAllUserRouter.get("/admin/getUsers", identifyUser, getUsersController);
export default getAllUserRouter;
