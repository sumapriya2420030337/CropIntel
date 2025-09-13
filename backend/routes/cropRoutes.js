const express = require("express");
const router = express.Router();

let crops = [];

router.get("/", (req, res) => res.json(crops));

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Crop name required" });
  crops.push({ id: crops.length + 1, name });
  res.json({ message: "Crop added", crops });
});

module.exports = router;
