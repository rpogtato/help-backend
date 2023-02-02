import { Router } from "express";
import { getAlbumPhotos, deletePhoto } from "../controllers/photos.js";

const router = Router();

/* READ */
router.get("/:albumId", getAlbumPhotos);
router.get("/:id/delete", deletePhoto);
export default router;
