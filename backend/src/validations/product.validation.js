import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    message: "Validation Failed",
    success: false,
    errors: result.array(),
  });
};

export const productValidate = [
  // Product Name
  body("name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be string")
    .isLength({ min: 2, max: 20 })
    .withMessage("Product name must be between 2 to 20 characters"),

  // Description
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be string")
    .isLength({ min: 10, max: 200 })
    .withMessage("Description must be between 10 to 200 characters"),

  // Price
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 1 })
    .withMessage("Price must be a positive number"),

  // Discount Price
  body("discountPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discount price must be a positive number")
    .custom((discountPrice, { req }) => {
      const price = parseFloat(req.body.price);

      if (parseFloat(discountPrice) >= price) {
        throw new Error("Discount price must be smaller than regular price");
      }

      return true;
    }),

  // Discount Start Date
  body("discountStart")
    .optional()
    .isISO8601()
    .withMessage("Please provide a valid discount start date"),

  // Discount End Date
  body("discountEnd")
    .optional()
    .isISO8601()
    .withMessage("Please provide a valid discount end date")
    .custom((value, { req }) => {
      const startDate = new Date(req.body.discountStart);
      const endDate = new Date(value);

      if (req.body.discountStart && endDate <= startDate) {
        throw new Error("Discount end date must be after start date");
      }

      return true;
    }),

  // Stock Quantity
  body("stockQuantity")
    .notEmpty()
    .withMessage("Stock quantity is required")
    .isInt({ min: 0 })
    .withMessage("Stock quantity must be 0 or greater"),

  // Stock Status
  body("stockStatus")
    .notEmpty()
    .withMessage("Stock status is required")
    .isBoolean()
    .withMessage("Stock status must be boolean (true or false)"),

  validate,
];
