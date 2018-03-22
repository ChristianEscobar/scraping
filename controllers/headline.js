const mongoose = require("mongoose");
const models = require("../models");

module.exports.headlines = function(req, res) {
	return models.Headline.find({})
	.then((dbHeadlines) => {
		console.log("return===>", dbHeadlines);

		const headlinesObj = {
			headlines: dbHeadlines
		}

		res.render("home", headlinesObj);
	});
}