const express = require("express");
const router = express.Router();
const headlinesController = require("../controllers/headline");

router.get("/", headlinesController.headlines);

module.exports = router;