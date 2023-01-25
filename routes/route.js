import express from "express";
import {
  clientAgencyController,
  getTopClientsController,
  updateClientController,
} from "../controller/agencyController.js";
import {
  loginUserController,
  signupUserController,
} from "../controller/userController.js";
import {
  agencyValidationRules,
  clientValidationRules,
  validate,
} from "../validator/validator.js";
import { verifyToken } from "../validator/verifyToken.js";

const router = express.Router();

router.post("/user/signup", signupUserController);
router.post("/user/login", loginUserController);

router.post(
  "/agency",
  verifyToken,
  agencyValidationRules(),
  clientValidationRules(),
  validate,
  clientAgencyController
);
router.put("/updateclient/:id", verifyToken, updateClientController);
router.get("/clients", verifyToken, getTopClientsController);

export default router;
