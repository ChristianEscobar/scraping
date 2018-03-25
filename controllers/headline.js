const mongoose = require("mongoose");
const models = require("../models");

module.exports.headlines = function(req, res) {
	models.Headline.find({})
	.then((dbHeadlines) => {

		const headlinesObj = {
			articles: dbHeadlines
		}

		res.render("home", headlinesObj);
	});
}