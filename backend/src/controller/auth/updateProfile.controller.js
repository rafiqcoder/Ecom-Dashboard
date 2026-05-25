import ImageKit from "@imagekit/nodejs";
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
  // get data from request
  const { name, email, password, phone, role, location, gender } = req.body;
  const profile = req.file;
  // store update data in a object;
  const updatedData = {
    name,
    email,
    password,
    phone,
    // role,
    location,
    gender,
  };
  // check email is already exist;
  const findEmail = await authModel.findOne({ email });
  if (findEmail) {
    return res.status(400).json({
      message: "Email already exist",
      success: false,
      err: "This email already exist",
    });
  }
  // store file in update data object
  if (profile?.buffer) {
    const file = await uploadFile({
      buffer: profile.buffer,
      fileName: `${Date.now()}-${profile.originalname}`,
      folder: "/profile",
      profileFileId: user.profileFileId ? user.profileFileId : null,
    });
    if (file) {
      updatedData.profile = file.url;
      updatedData.profileFileId = file.fileId;
    }
  }
  // if update password then hash password and store it in updated data
  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    updatedData.password = hashPassword;
  }
  // update user
  const findUser = await authModel.findByIdAndUpdate(user._id, updatedData);
  return res.status(200).json({
    message: "Profile update successfuly",
    success: true,
    profile: findUser,
  });
};
