import AddressModel from "../../../models/user/address/address.model.js";

export const getAddressController = async (req, res) => {
  const user = req.user;
  const address = await AddressModel.find({ userId: user._id });
  if (!address) {
    return res.status(200).json({
      success: false,
      message: "Address not found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Addresses fetched successfully",
    data: address,
  });
};
