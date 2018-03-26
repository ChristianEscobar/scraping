// Handlebars template for articles
const savedArticlesTemplate = `
	{{#each articles}}
    <div class="card">
      <div class="card-header">
        <a href={{ this.link }} target="_blank"><h5 id="article-title">{{ this.headline }}</h5></a>
        <button class="article-delete-btn btn btn-success" data-id={{ this._id }}>Delete From Saved</button>
      </div>
      <div class="card-body">
        <p class="card-text">{{ this.summary }}</p>
      </div>
    </div>

    <br>
  {{/each}}`;

$(document).on("click", ".article-delete-btn", function(event) {
  event.preventDefault();

  const articleId = $(this).attr("data-id");

  $.ajax({
    url: "/api/save/articles",
    method: "DELETE",
    data: {id : articleId}
  })
  .done( deleteResults => {
    renderArticles(deleteResults, savedArticlesTemplate, "saved-articles-div");
  });
});