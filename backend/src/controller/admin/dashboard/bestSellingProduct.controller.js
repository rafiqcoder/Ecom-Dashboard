export const bestSellingProductController = async (req, res) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(406).json({
      message: "Only admin can access",
      success: false,
    });
  }
  
};
