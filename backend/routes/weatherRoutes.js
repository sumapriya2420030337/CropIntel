const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { city } = req.query;
  if (!city) return res.json({ error: "City required" });

  res.json({
    city,
    temperature: (25 + Math.random() * 5).toFixed(1),
    humidity: Math.floor(50 + Math.random() * 40),
    wind: Math.floor(5 + Math.random() * 15),
    condition: "Sunny",
  });
});

module.exports = router;
