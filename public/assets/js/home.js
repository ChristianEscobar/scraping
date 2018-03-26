// Handlebars template for articles
const articlesTemplate = `
	{{#each articles}}
		<div class="card">
			<div class="card-header">
		  	<h5 id="article-title">{{ this.headline }}</h5>
		  	<a href="#" id="article-save" class="btn btn-success">Save Article</a>
		  </div>
		  <div class="card-body">
		    <p class="card-text">{{ this.summary }}</p>
		  </div>
		</div>

		<br>
	{{/each}}`;

const noArticlesTemplate = `
	<div class="card">
		<div class="card-header">
	  	<h5 id="article-title">No Articles Found</h5>
	  </div>
	  <div class="card-body">
	    <p class="card-text">No articles were found in the database.  Try scraping for new articles.</p>
	  </div>
	</div>
`;

// Listener for scrape articles button
$("#scrape-btn").on("click", function(event) {
	event.preventDefault();

	$.post("/api/scrape")
	.then( articles => {

		if(articles.articles.length > 0) {
			// Compile the articles templates
			const renderArticles = Handlebars.compile(articlesTemplate);


			// Append the rendered results to the home page
			$("#articles-div").html(renderArticles(articles));
		} 

		// Update modal body text
		$("#articles-added").text( (articles.articles.length > 0) ? `${articles.articles.length} articles added.` : `No new articles found.` );

		// Display modal
		$("#articlesAddedModal").modal("show");
	})
	.catch( error => console.error(error));
});

// Listener for save article
$("#article-save").on("click", function(event) {
	console.log("save...");
});

// Page load listener used to load existing articles
$.getJSON("/api/articles", data => console.log("completed"));
