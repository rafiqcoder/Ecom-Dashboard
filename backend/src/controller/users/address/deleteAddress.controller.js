import AddressModel from "../../../models/user/address/address.model.js";

export async function deleteAddressController(req, res) {
  const user = req.user;
  const addressId = req.params.id;

  if (!addressId) {
    return res.status(400).json({ success:false, message: "Address ID is required" });
  }

  const address = await AddressModel.findOneAndDelete({
    _id: addressId,
    userId: user._id,
  });
  if (!address) {
    return res.status(404).json({ success: false, message: "Address not found" });
  }
  res.status(200).json({ success: true, message: "Address deleted successfully", data: address });
}
