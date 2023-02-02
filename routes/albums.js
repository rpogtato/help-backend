import { Router } from "express";
import { getUserAlbums, deleteAlbum } from "../controllers/albums.js";
const router = Router();

/* READ */
router.get("/:userId", getUserAlbums);
router.get("/:id/delete", deleteAlbum);
export default router;
