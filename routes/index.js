const express = require("express");
const router = express.Router();
const fetchController = require("../controllers/fetch.js")


router.get("/", fetchController.home);

module.exports = router;