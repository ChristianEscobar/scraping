const cheerio = require("cheerio");
const request = require("request");

module.exports.home = function(req, res) {
	console.log("in controller");
	res.render("home");
};