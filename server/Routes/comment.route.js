import express from "express";
import { protect } from "../Middleware/auth.middleware.js"
import { addComment, getComments } from "../Controllers/comment.controller.js"

const router = express.Router();

router.get("/:postId", getComments);
router.post("/:postId", protect, addComment);

export default router;
