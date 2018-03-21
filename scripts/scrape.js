const cheerio = require("cheerio");
const request = require("request");

const url = "https://gizmodo.com/"

module.exports.scrape = request(url, function(error, response, html) {
	// Load the HTML into cheerio and save it to a variable
  const $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  const articles = [];

  // An empty object used to return results for Handlebars
  let resultsObj = {};

  // Select HTML tags
  $("h1.headline").each(function(i, element) {

    const link = $(element).children("a").attr("href");

    // Skip over ads
    if(link.startsWith("https://deals.kinja.co")) {
    	return true;
    }

    const headline = $(element).children().text();
    const summary = $(element).parent().siblings("div.item__content").children("div.entry-summary").text();
    
    // Save article data
    articles.push({
      headline: headline,
      summary: summary,
      link: link
    });
  });

  resultsObj.articles = articles;

  return resultsObj;
});