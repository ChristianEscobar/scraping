const express = require("express");
const router = express.Router();
const fetchController = require("../../controllers/fetch");
const headlinesController = require("../../controllers/headline");

// Scrape for new articles
router.post("/api/scrape", fetchController.scrape);

// Get articles
router.get("/api/articles", headlinesController.getHeadlines);

// Save articles
router.post("/api/articles/:id?", headlinesController.saveHeadlines);

module.exports = router;