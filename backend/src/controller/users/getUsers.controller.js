import authModel from "../../models/auth/auth.model.js";

export const getUsersController = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      mesage: "User not found",
      success: false,
      err: "This user doesn't exist",
    });
  }
  if (user.role !== "admin") {
    return res.status(403).json({
      message: "Only admin can get the users",
      success: false,
      err: "only admin can get the users",
    });
  }
  const users = await authModel.find();
  return res.status(200).json({
    message: "Users fetch successfuly",
    success: true,
    users,
  });
};
