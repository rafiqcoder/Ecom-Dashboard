export const lastSeenMiddleware = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      next();
    }
    const presentDate = Date.now();
    const differ = (presentDate - user.lastSeen) / (1000 * 60);
    // update after 5 minutes
    if (!user.lastSeen || differ > 5) {
      user.lastSeen = presentDate;
      user.onlineStatus = "online"
      await user.save();
    }
    next();
  } catch (error) {
    res.status(400).json({
      message: "Have problem with last seen middleware",
    });
  }
};
