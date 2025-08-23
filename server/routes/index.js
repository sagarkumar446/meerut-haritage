import { Router } from "express";
// import { registerUser } from "./userRoutes.js";
// import { loginUser } from "./userRoutes.js";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";

const router = Router();
// Posts routes 
router.get("/posts/", getAllPosts);
router.get("/posts/:id", getPostById);
router.post("/posts/", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id/like", likePost);
// User routes

// router.post("/user/register", registerUser);
// router.post("/user/login", loginUser);

export default router;