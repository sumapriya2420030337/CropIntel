const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { location } = req.query;
  if (!location) return res.json({ error: "Location required" });

  res.json({
    location,
    ph: 6.8,
    nitrogen: "Medium",
    potassium: "High",
    phosphorus: "Low",
  });
});

module.exports = router;
