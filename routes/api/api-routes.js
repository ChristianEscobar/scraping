const express = require("express");
const router = express.Router();
const fetchController = require("../../controllers/fetch");
const headlinesController = require("../../controllers/headline");

router.post("/api/scrape", fetchController.scrape);

router.get("/api/headlines", headlinesController.headlines)

module.exports = router;