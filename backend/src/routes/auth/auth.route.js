import express from "express";
import {
  getController,
  loginController,
  logoutController,
  registerController,
} from "../../controller/auth/auth.controller.js";
import { authValidate } from "../../validations/auth.validation.js";
import { identifyUser } from "../../middlewares/auth.middlewares.js";
const authRouter = express.Router();

authRouter.post("/register", authValidate, registerController);
authRouter.post("/login", authValidate, loginController);
authRouter.get("/get-me", identifyUser, getController);
authRouter.post("/logout", logoutController)
export default authRouter;
