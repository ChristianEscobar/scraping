const express = require("express");
const router = express.Router();

router.get("/saved", function(req, res) {
		res.render("saved");
});

module.exports = router;