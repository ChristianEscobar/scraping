const cheerio = require("cheerio");
const request = require("request");
const scrapeUtil = require("../scripts/scrape");

module.exports.scrape = function(req, res) {

	// Callback function passed to scrape method
	const scrapeCallbackFn = function scrapeCallback(articles) {
		res.json(articles);
	}

	const articles = scrapeUtil.execute(scrapeCallbackFn);
};