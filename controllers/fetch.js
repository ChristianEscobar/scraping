const cheerio = require("cheerio");
const request = require("request");
const scrape = require("../scripts/scrape");

module.exports.scrape = function(req, res) {
	console.log("In fetch.js");

	// Callback function passed to scrape method
	const scrapeCallbackFn = function scrapeCallback(articles) {
		console.log("About to return!!!", articles);

		res.render("home", articles);
	}

	const articles = scrape.execute(scrapeCallbackFn);
};