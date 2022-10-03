import express from "express";

import { UserController } from "../controllers";
import { registerValidation } from "../validations/index";

const router = express.Router();

router.post("/register", registerValidation, UserController.register);

export default router;
