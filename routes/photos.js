import { Router } from "express";

const router = Router();

/* READ */
router.get("/:albumId", getPhoto);
router.get("/:id/delete", deletePhoto);
export default router;
