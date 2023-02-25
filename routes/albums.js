import { Router } from "express";
import { getUserAlbums, deleteAlbum, newAlbum } from "../controllers/albums.js";
const router = Router();

/* READ */
router.get("/:userId", getUserAlbums);

/* CREATE */
router.post("/post/:userId", newAlbum);

/* DELETE */
router.delete("/:id/delete", deleteAlbum);

export default router;
