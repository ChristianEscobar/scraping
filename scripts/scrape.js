"use strict"

const cheerio = require("cheerio");
const request = require("request");
// Load Mongo Models
const models = require("../models");
const mongoose = require("mongoose");

const url = "https://gizmodo.com/";

module.exports.execute = function(callbackFn) {

  // Request call to url
  request(url, function(error, response, html) {
    console.log("Starting scrape for new articles");

    // Load the HTML into cheerio and save it to a variable
    const $ = cheerio.load(html);

    const articles = [];

    // Select HTML tags
    $("h1.headline").each(function(i, element) {

      const link = $(element).children("a").attr("href");

      // Skip over ads
      if(link.startsWith("https://deals.kinja.co")) {
        return false;
      } else {
        const headline = $(element).children().text();

        const summary = $(element).parent().siblings("div.item__content").children("div.entry-summary").text();
      
        // Save article data to the database
        const article = {
          headline: headline,
          summary: summary,
          link: link
        }

        articles.push(article);
      }
    });

    if(articles.length > 0) {

      models.Headline.create(articles)
      .then( dbArticles => {
        console.log("Articles saved!");
        
        callbackFn({articles: dbArticles});
      })
      .catch( error => console.error(error));
    }
  });
}