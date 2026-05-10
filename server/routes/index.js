const { Router } = require("express");
// import { registerUser } from "./userRoutes.js";
// import { loginUser } from "./userRoutes.js";
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");

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

module.exports = router;
