import { Router } from "express";
import { getUserAlbums, deleteAlbum, newAlbum } from "../controllers/albums.js";
const router = Router();

/* READ */
router.get("/:userId", getUserAlbums);
router.get("/:id/delete", deleteAlbum);

/* CREATE */
router.post("/:userId/post", newAlbum);

/* DELETE */
export default router;
