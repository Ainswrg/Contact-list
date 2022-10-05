import express from "express";

import { UserController } from "../controllers";
import { checkAuth } from "../middleware";
import { handleValidationErrors } from "../utils";
import { loginValidation, registerValidation } from "../validations/index";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
router.get("/me", checkAuth, UserController.getMe);

export default router;
