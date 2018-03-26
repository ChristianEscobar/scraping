const mongoose = require("mongoose");
const models = require("../models");

module.exports.getHeadlines = function(req, res) {
	models.Headline.find({})
	.then( dbHeadlines => {

		const headlinesObj = {
			articles: dbHeadlines
		}

		res.render("home", headlinesObj);
	});
}

module.exports.saveHeadlines = function(req, res) {
	// First, find the article
	models.Headline.findById(req.body.id)
	.then( article => {

		// Create object to insert
		const saveObj = {

			headline: article.headline,
			summary: article.summary,
			link: article.link
		}

		// Then, save the article
		return models.Save.create(saveObj)
	})
	.then( savedArticle => {
		// Finally, remove it from the Headline collection
		return models.Headline.findByIdAndRemove(req.body.id)
	})
	.then( removeResults => {
		return models.Headline.find({});
	})
	.then( allResults => {

		res.json( {articles: allResults} );
	})
	.catch( error => console.error(error));
}

module.exports.getSavedHeadlines = function(req, res) {
	models.Save.find({})
	.then( dbHeadlines => {
		
		const headlinesObj = {
			articles: dbHeadlines
		}

		res.render("saved", headlinesObj); 
	})
	.catch( error => console.error(error));
}

module.exports.deleteSavedHeadlines = function(req, res) {

	models.Save.findByIdAndRemove(req.body.id)
	.then(removeResults => {
		return models.Save.find({});
	})
	.then( findResults => {
		const headlinesObj = {
			articles: findResults
		}

		res.json(headlinesObj);
	})
	.catch( error => console.error(error));

}