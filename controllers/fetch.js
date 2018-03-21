const cheerio = require("cheerio");
const request = require("request");
const scrape = require("../scripts/scrape");

module.exports.scrapeArticles = function(req, res) {
	const articles = scrape.scrape;

	res.render("home", articles);
};

module.exports.home = function(req, res) {
	res.render("home");
}