import express from "express";
import { updateProfileController } from "../../controller/auth/updateProfile.controller.js";
import { identifyUser } from "../../middlewares/auth.middlewares.js";
import upload from "../../middlewares/multer/multer.middleware.js";

const updateProfileRouter = express.Router();
updateProfileRouter.patch(
  "/update/profile",
  identifyUser,
  upload.single("profile"),
  updateProfileController,
);

export default updateProfileRouter;
