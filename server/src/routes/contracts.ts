import express from "express";
import { isAuthenticated } from "../middleware/auth";

import { handleErrors } from "../middleware/errors";
import { analyzeContract, detectAndConfirmContractType, uploadMiddleware } from "../controllers/contact.controller";

const router = express.Router();

router.post(
  "/detect-type",
  isAuthenticated,
  uploadMiddleware,
  handleErrors(detectAndConfirmContractType)
);

router.post(
  "/analyze",
  isAuthenticated,
  uploadMiddleware,
  handleErrors(analyzeContract)
);

// router.get("/user-contracts", isAuthenticated, handleErrors(getUserContracts));
// router.get("/contract/:id", isAuthenticated, handleErrors(getContractByID));

export default router;
