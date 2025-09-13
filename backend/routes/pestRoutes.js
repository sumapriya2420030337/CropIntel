const express = require("express");
const router = express.Router();
const pests = require("../data/pests.json");

router.get("/", (req, res) => res.json(pests));

module.exports = router;
