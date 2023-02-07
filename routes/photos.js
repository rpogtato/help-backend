import { Router } from "express";
import {
  getAlbumPhotos,
  deletePhoto,
  newPhoto,
} from "../controllers/photos.js";

const router = Router();

/* READ */
router.get("/:albumId", getAlbumPhotos);
router.get("/:id/delete", deletePhoto);

/* CREATE */
router.post("/:albumId/post", newPhoto);

/* DELETE */

export default router;
