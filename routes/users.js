import express from "express";
import {
  getUser,
  getAllUsers,
  deleteUser,
  register,
} from "../controllers/users.js";

const router = express.Router();

/* READ */
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.get("/:id/delete", deleteUser);

/* CREATE */
router.post("/register", register);

/* DELETE */

export default router;
