import { Router } from "express";

const router = Router();

/* READ */
router.get("/:userId", getAlbum);
router.get("/:id/delete", deleteAlbum);
export default router;
