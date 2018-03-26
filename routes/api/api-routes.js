const express = require("express");
const router = express.Router();
const fetchController = require("../../controllers/fetch");
const headlinesController = require("../../controllers/headline");

// Scrape for new articles
router.post("/api/scrape", fetchController.scrape);

// Get articles
router.get("/api/articles", headlinesController.getHeadlines);

// Get saved articles
router.get("/api/save/articles", headlinesController.getSavedHeadlines);

// Save articles
router.post("/api/save/articles/:id?", headlinesController.saveHeadlines);

// Delete saved article
router.delete("/api/save/articles/:id?", headlinesController.deleteSavedHeadlines);

module.exports = router;