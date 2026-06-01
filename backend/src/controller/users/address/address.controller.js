import AddressModel from "../../../models/user/address/address.model.js";

export const createAddress = async (req, res) => {
  const user = req.user;

  const { name, phone, addressLine1, city, state, zipCode, country } = req.body;

  if (
    !name ||
    !phone ||
    !addressLine1 ||
    !city ||
    !state ||
    !zipCode ||
    !country
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
      error: "Please provide all the required fields",
    });
  }

  const address = await AddressModel.create({
    userId: user._id,
    fullName: name,
    phone,
    streetAddress: addressLine1,
    city,
    state,
    postalCode: zipCode,
    country,
  });

  return res.status(200).json({
    success: true,
    message: "Address created successfully",
    data: address,
  });
};
