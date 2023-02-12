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

/* CREATE */
router.post("/register", register);

/* DELETE */
router.delete("/:id/delete", deleteUser);

export default router;
