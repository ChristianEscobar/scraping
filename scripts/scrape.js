const cheerio = require("cheerio");
const request = require("request");
// Load Mongo Models
const models = require("../models");
const mongoose = require("mongoose");

const url = "https://gizmodo.com/"

module.exports.execute = function(callbackFn) {

  // Request call to url
  request(url, function(error, response, html) {
    console.log("Starting scrape for new articles");

  	// Load the HTML into cheerio and save it to a variable
    const $ = cheerio.load(html);

    console.log(models);

    // Select HTML tags
    $("h1.headline").each(function(i, element) {

      const link = $(element).children("a").attr("href");

      console.log("link", link);

      // Skip over ads
      if(link.startsWith("https://deals.kinja.co")) {
      	return true;
      }

      const headline = $(element).children().text();
      const summary = $(element).parent().siblings("div.item__content").children("div.entry-summary").text();
      
      // Save article data to the database
      const article = {
        headline: headline,
        summary: summary,
        link: link
      }

      models.Headline.create(article)
      .then((dbArticle) => {
        console.log("article saved!");
      })
      .catch((error) => {
        console.error(error);
      });
      
    });
  });
}