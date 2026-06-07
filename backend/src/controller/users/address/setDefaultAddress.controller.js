import AddressModel from "../../../models/user/address/address.model.js";

export const setDefaultAddress = async (req, res) => {
  const user = req.user;

  const { addressId } = req.params;
  if (!addressId) {
    return res
      .status(404)
      .json({ success: false, message: "Address not found" });
  }

  await AddressModel.updateMany(
    { userId: user._id },
    { $set: { isDefault: false } },
  );

  const updatedAddress = await AddressModel.findByIdAndUpdate(addressId, {
    isDefault: true,
  });

  return res.status(200).json({
    success: true,
    message: "Address set as default successfully",
    data: updatedAddress,
  });
};
