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

export const createAddressValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("addressLine1").notEmpty().withMessage("Address is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("state").notEmpty().withMessage("State is required"),
    body("zipCode").notEmpty().withMessage("Zip code is required"),
    body("country").notEmpty().withMessage("Country is required"),
    validate,
];

export default validate;
