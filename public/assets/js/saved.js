// Handlebars template for articles
const savedArticlesTemplate = `
	{{#each articles}}
    <div class="card">
      <div class="card-header">
        <a href={{ this.link }} target="_blank"><h5 id="article-title">{{ this.headline }}</h5></a>
        <button class="article-notes-btn btn btn-success" data-id={{ this._id }}>Article Notes</button>
        <button class="article-delete-btn btn btn-success" data-id={{ this._id }} article-id={{ this.articleId }}>Delete From Saved</button>
      </div>
      <div class="card-body">
        <p class="card-text">{{ this.summary }}</p>
      </div>
    </div>

    <br>
  {{/each}}
`;

const articleNotesTemplate = `
  {{#each note}}
    <div class="card">
      <div class="card-body">
        {{ this.body }}
        <button class="note-delete-btn btn btn-danger" data-id={{ this._id }}>&times;</button> 
      </div>
    </div>
  {{/each}}
`;

// Listener for removing saved articles
$(document).on("click", ".article-delete-btn", function(event) {
  event.preventDefault();

  const articleId = $(this).attr("data-id");

  $.ajax({
    url: "/api/save/articles/" + articleId,
    method: "DELETE"
  })
  .done( deleteResults => {
    renderData(deleteResults, savedArticlesTemplate, "saved-articles-div");
  });
});

// Listener for adding notes
$(document).on("click", ".article-notes-btn", function(event) {
  const articleId = $(this).attr("data-id");


  $.get("/api/notes/articles/" + articleId)
  .then( articleNotes => {

    // Set note title
    $("#modal-title").text( `Notes for article ${articleId}` );

    // Set article id attribute
    $("#save-note-btn").attr("data-id", articleId);

    // Display existing notes
    renderData(articleNotes, articleNotesTemplate, "", "article-notes");

    // Display modal
    $("#articleNotesModal").modal("show");
  });
});

// Listener for saving notes
$("#save-note-btn").on("click", function(event) {
  const articleId = $(this).attr("data-id");

  const noteText = $("#note-text").val();

  const noteTitle = $("#modal-title").text();

  $.post("/api/notes/articles/" + articleId, {title: noteTitle, body: noteText})
  .then( noteSaveResults => {

    // Clear note text in modal just incase
    $("#note-text").val("");
  });
})

$(document).on("click", ".note-delete-btn", function(event) {
  event.preventDefault();

  const noteId = $(this).attr("data-id");

  $.ajax({
    url: "/api/notes/" + noteId,
    method: "DELETE"
  })
  .done( deleteResults => {
    $(this).parent().remove()
  });
})