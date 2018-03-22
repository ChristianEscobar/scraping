const express = require("express");
const router = express.Router();
const fetchController = require("../../controllers/fetch");

router.get("/api/scrape", fetchController.scrape);

module.exports = router;