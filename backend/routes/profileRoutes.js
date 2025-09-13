const express = require("express");
const router = express.Router();

let profile = {
  name: "Farmer",
  location: "Hyderabad",
  language: "English",
};

router.get("/", (req, res) => res.json(profile));

router.post("/", (req, res) => {
  profile = { ...profile, ...req.body };
  res.json({ message: "Profile updated", profile });
});

module.exports = router;
