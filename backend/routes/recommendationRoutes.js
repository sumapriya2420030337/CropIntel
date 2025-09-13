const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { crop } = req.query;
  if (!crop) return res.json({ error: "Crop required" });

  res.json({
    crop,
    recommendation: `For ${crop}, ensure balanced irrigation and apply organic fertilizer.`,
  });
});

module.exports = router;
