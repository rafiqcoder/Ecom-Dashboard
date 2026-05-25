import authModel from "../../models/auth/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import redis from "../../config/cache.js";
// register user
export const registerController = async (req, res) => {
  const { name, email, password, phone, role, location, gender } = req.body;
  const isUserExist = await authModel.findOne({ email });
  if (isUserExist) {
    return res.status(404).json({
      message: "User already exist",
    });
  }
  // hash password
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await authModel.create({
    email,
    password: hashPassword,
    role,
    phone,
    name,
    location,
    gender
  });
  // create token
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "4d",
  });
  res.cookie("token", token);
  // delete password from new user
  const user = newUser.toObject();
  delete user.password;
  res.status(201).json({
    message:
      "You successfuly Register Please Verify your Email to active you account",
    success: true,
    user,
  });
};
// login user
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await authModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid Creandential",
    });
  }
  // check password matching
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "Invalid Creandential",
    });
  }
  // create token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token);

  // update last login
  const presentTime = new Date();
  user.lastLogin = presentTime;
  await user.save();
  // remove password
  const updateData = user.toObject();
  delete updateData.password;

  return res.status(200).json({
    message: "Login success",
    success: true,
    user: updateData,
  });
};
// get current user with saved token
export const getController = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(409).json({
      message: "Please login/register for continue this website",
      success: false,
    });
  }
  // remove password
  const data = user.toObject();
  delete data.password;
  res.status(200).json({
    message: "User fetch successfully ",
    success: true,
    user: data,
  });
};
// logout controller
export const logoutController = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      message: "Token not provided",
      success: false,
      err: "Please login/register for logout",
    });
  }
  res.clearCookie("token");
  const blackListed = await redis.set(
    token,
    Date.now().toString(),
    "EX",
    60 * 60 * 60, // expire in 2days if 60 * 60 its mean 1hour
  );
  res.status(200).json({
    message: "Successfuly logout",
  });
};
