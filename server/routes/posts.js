const express = require("express");
const router = express.Router();
const { Post, User, Comment, Like } = require("../models");

// Pobieranie wszystkich postów
router.get("/", async (req, res) => {
  const posts = await Post.findAll({
    include: [
      { model: User, attributes: ["username", "avatar"] },
      {
        model: Comment,
        include: [{ model: User, attributes: ["username", "avatar"] }],
      },
      { model: Like, include: [User] },
    ],
  });
  res.json(posts);
});

// Tworzenie nowego posta
router.post("/", async (req, res) => {
  const newPost = await Post.create({
    userId: req.user.id,
    content: req.body.content,
  });
  res.json(newPost);
});

// Lajkowanie posta
router.post("/:id/like", async (req, res) => {
  const like = await Like.create({
    postId: req.params.id,
    userId: req.user.id,
  });
  res.json(like);
});

// Dodawanie komentarza do posta
router.post("/:id/comment", async (req, res) => {
  const comment = await Comment.create({
    postId: req.params.id,
    userId: req.user.id,
    content: req.body.content,
  });
  res.json(comment);
});

module.exports = router;
