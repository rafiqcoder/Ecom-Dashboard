import jwt from "jsonwebtoken";
import authModel from "../models/auth/auth.model.js";
import redis from "../config/cache.js";
export const identifyUser = async (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies?.token;

    // Check token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
        error: "Authentication token is missing. Please login first.",
      });
    }
    // is black listed token
    const isBlackListed = await redis.get(token);
    if (isBlackListed) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
        error: "This is in black listed",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check decoded data
    if (!decoded?.id) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
        error: "Token verification failed.",
      });
    }

    // Find user
    const user = await authModel.findById(decoded.id).select("-password");

    // Check user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: "No user exists with this token.",
      });
    }

    // Attach user to request
    req.user = user;

    // Continue
    next();
  } catch (error) {
    // JWT specific errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
        error: "Your session has expired. Please login again.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
        error: "Authentication token is invalid.",
      });
    }

    // Server error
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
      error: "Something went wrong while identifying the user.",
    });
  }
};
