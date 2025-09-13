const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { question } = req.body;
  if (!question) return res.json({ error: "Question required" });

  res.json({
    question,
    answer: "This is a mock AI response. In real version, connect to GPT/ML model.",
  });
});

module.exports = router;
