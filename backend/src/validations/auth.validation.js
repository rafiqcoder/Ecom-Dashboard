import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({
    error: errors.array(),
  });
};
export const authValidate = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 to 30")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),
  ,
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be valid email address"),
  body("password").custom((value) => {
    if (value.length < 8) {
      throw new Error("Password should be at least 8 Character");
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(value)) {
      throw new Error(
        "Password Should be contain at least one uppercase letter and one number",
      );
    }
    return true;
  }),
  validate,
];

// login validation
export const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be valid email address"),
  body("password").custom((value) => {
    if (value.length < 8) {
      throw new Error("Password should be at least 8 Character");
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(value)) {
      throw new Error(
        "Password Should be contain at least one uppercase letter and one number",
      );
    }
    return true;
  }),
  validate,
];
