const cheerio = require("cheerio");
const request = require("request");

const url = "https://gizmodo.com/"

request(url, function(error, response, html) {
	// Load the HTML into cheerio and save it to a variable
  const $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  const results = [];

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
    results.push({
      headline: headline,
      summary: summary,
      link: link
    });
  });

  console.log(results);
});