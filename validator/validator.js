import { body, validationResult } from "express-validator";

export const agencyValidationRules = () => {
  return [
    body("agency.agencyName")
      .isLength({ min: 8 })
      .withMessage("agency name must be at least 4 chars long")
      .exists()
      .withMessage("agency name is required"),
    body("agency.agencyPhone")
      .isLength({ min: 10 })
      .withMessage("phone number must be at least 10 numbers long")
      .exists()
      .withMessage("phone number is required"),
  ];
};

export const clientValidationRules = (req, res) => {
  return [
    body("client.clientName")
      .isLength({ min: 5 })
      .withMessage("Clinet name should be atleast 5 characters"),
    body("client.clientEmail")
      .isEmail()
      .withMessage("Please enter valid email"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};
