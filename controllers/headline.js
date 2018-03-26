const mongoose = require("mongoose");
const models = require("../models");

module.exports.getHeadlines = function(req, res) {
	models.Headline.find({})
	.then((dbHeadlines) => {

		const headlinesObj = {
			articles: dbHeadlines
		}

		res.render("home", headlinesObj);
	});
}

module.exports.saveHeadline = function(req, res) {
	
}