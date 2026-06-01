import AddressModel from "../../../models/user/address/address.model.js";

export const editAddressController = async (req, res) => {
  const { name, phone, addressLine1, city, state, zipCode, country } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Address ID is required" });
  }

  const address = await AddressModel.findById(id);
  if (!address) {
    return res.status(404).json({ message: "Address not found" });
  }

  const update = await AddressModel.findByIdAndUpdate(
    id,
    {
      fullName: name,
      phone,
      streetAddress: addressLine1,
      city,
      state,
      postalCode: zipCode,
      country,
    },
  );
  return res
    .status(200)
    .json({ message: "Address updated successfully", data: update });
};
