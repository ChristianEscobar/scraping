const express = require("express");
const router = express.Router();
const headlinesController = require("../../controllers/headline");

router.get("/saved", headlinesController.getSavedHeadlines);

module.exports = router;