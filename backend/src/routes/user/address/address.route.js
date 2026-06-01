import express from "express";
import { createAddress } from "../../../controller/users/address/address.controller.js";
import { identifyUser } from "../../../middlewares/auth.middlewares.js";
import { createAddressValidation } from "../../../validations/createAddress.validation.js";
import { editAddressController } from "../../../controller/users/address/editAddress.controller.js";
import { getAddressController } from "../../../controller/users/address/getAddress.controller.js";
import { deleteAddressController } from "../../../controller/users/address/deleteAddress.controller.js";

const addressRouter = express.Router();
// add address
addressRouter.post("/create-new-address", identifyUser, createAddressValidation, createAddress);
// edit address
addressRouter.patch("/edit-address/:id", identifyUser, editAddressController);
// get addressess
addressRouter.get("/get-addresses", identifyUser, getAddressController)
// delete address
addressRouter.delete("/delete-address/:id", identifyUser, deleteAddressController);
export default addressRouter;