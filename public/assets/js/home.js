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

// Listener for scrape articles button
$("#scrape-btn").on("click", function(event) {
	event.preventDefault();

	$.post("/api/scrape")
	.then( articles => {

		// Compile the articles templates
		const renderArticles = Handlebars.compile(articlesTemplate);

		// Append the rendered results to the home page
		$("body").append(renderArticles(articles));
	})
	.catch( error => console.error(error));
});