import express from "express";
import { getUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

/* READ */
router.get("/", getAllUsers);
router.get("/:id", getUser);

export default router;
