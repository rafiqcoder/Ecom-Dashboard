import authModel from "../../models/auth/auth.model.js";
import uploadFile from "../../services/storage.service.js";
import bcrypt from "bcryptjs";
export const updateProfileController = async (req, res) => {
  const user = req.user;
  const isUserExist = await authModel.findById(user._id);
  if (!isUserExist) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      err: "This user doesn't exist",
    });
  }
  const { name, email, password, phone, role, location } = req.body;
  const profile = req.file;
  const updatedData = {
    name,
    email,
    password,
    phone,
    // role,
    location,
  };
  if (profile?.buffer) {
    const file = await uploadFile({
      buffer: profile.buffer,
      fileName: `${Date.now()}-${profile.originalname}`,
    });
    updatedData.profile = file.url;
  }
  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    updatedData.password = hashPassword;
  }
  const findUser = await authModel.findByIdAndUpdate(user._id, updatedData);
  return res.status(200).json({
    message: "Profile update successfuly",
    success: true,
    profile: findUser,
  });
};