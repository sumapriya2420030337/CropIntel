const express = require("express");
const router = express.Router();
const schemes = require("../data/schemes.json");

router.get("/", (req, res) => res.json(schemes));

module.exports = router;
