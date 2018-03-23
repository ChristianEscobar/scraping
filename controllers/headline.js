const mongoose = require("mongoose");
const models = require("../models");

module.exports.headlines = function(req, res) {
	return models.Headline.find({})
	.then((dbHeadlines) => {

		const headlinesObj = {
			headlines: dbHeadlines
		}

		res.render("home", headlinesObj);
	});
}