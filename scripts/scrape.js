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
    	console.log("SKIPPED", link);
    	return true;
    }

    const title = $(element).children().text();
    
    // Save article data
    results.push({
      title: title,
      link: link
    });
  });

  console.log(results);
});