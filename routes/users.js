import express from "express";
import { getUser, getAllUsers, deleteUser } from "../controllers/users.js";

const router = express.Router();

/* READ */
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.get("/:id/delete", deleteUser);

export default router;
