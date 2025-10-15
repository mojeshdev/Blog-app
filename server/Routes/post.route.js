import express from "express";
import { protect } from "../Middleware/auth.middleware.js"
import { upload } from "../Middleware/upload.middleware.js"
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
} from "../Controllers/post.controller.js"

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", protect, upload.single("image"), createPost);
router.put("/:id", protect, upload.single("image"), updatePost);
router.delete("/:id", protect, deletePost);
router.post("/:id/like", protect, likePost);

export default router;
