const cheerio = require("cheerio");
const request = require("request");

module.exports.home = function(req, res) {
	res.render("home");
};