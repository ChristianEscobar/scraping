const express = require("express");
const router = express.Router();
const headlinesController = require("../controllers/headline");

router.get("/", headlinesController.getHeadlines);

module.exports = router;