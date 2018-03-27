// Handlebars template for articles
const articlesTemplate = `
	{{#each articles}}
  	<div class="card">
      <div class="card-header">
        <a href={{ this.link }} target="_blank"><h5 id="article-title">{{ this.headline }}</h5></a>
        <button class="article-save-btn btn btn-success" data-id={{ this._id }}>Save Article</button>
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

const renderData = (data, template, divIdName, divClassName) => {
	// Compile the articles templates
	const renderData = Handlebars.compile(template);

	// Append the rendered results
	if(divIdName && divIdName.length > 0) {
		$("#" + divIdName).html(renderData(data));	
	} else {
		$("." + divClassName).html(renderData(data));	
	}
	
}

// Listener for scrape articles button
$("#scrape-btn").on("click", function(event) {
	event.preventDefault();

	$.post("/api/scrape")
	.then( articles => {

		if(articles.articles.length > 0) {
			renderData(articles, articlesTemplate, "articles-div");
		} 

		// Update modal body text
		$("#modal-body-text").text( (articles.articles.length > 0) ? `${articles.articles.length} articles added.` : `No new articles found.` );

		// Display modal
		$("#articlesAddedModal").modal("show");
	})
	.catch( error => console.error(error));
});

// Listener for save article
$(document).on("click", ".article-save-btn", function(event) {
	event.preventDefault();

	const articleId = $(this).attr("data-id");

	$.post("/api/save/articles/" + articleId)
	.then( saveResults => {
		renderData(saveResults, articlesTemplate, "articles-div");
	});
});

// Page load listener used to load existing articles
//$.getJSON("/api/articles", data => console.log("completed"));
