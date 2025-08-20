const express = require("express");
const multer = require("multer");
const path = require("path");
const Post = require("../modles/post") // Adjust path as needed

const router = express.Router();

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// GET all posts (latest first)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [["createdAt", "DESC"]] });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET post by id
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new post with optional image
router. post("/", upload.single("attachment"), async (req, res) => {
  try {
    const { author, text } = req.body;
    const attachment = req.file ? `/uploads/${req.file.filename}` : null;

    if (!text) return res.status(400).json({ error: "Text is required" });

    const post = await Post.create({ author, text, attachment });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update a post
router.put("/:id", upload.single("attachment"), async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const { author, text } = req.body;
    if (author !== undefined) post.author = author;
    if (text !== undefined) post.text = text;
    if (req.file) post.attachment = `/uploads/${req.file.filename}`;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.likes++;
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
