$("#scrape-btn").on("click", function(event) {
	event.preventDefault();

	$.get("/api/scrape")
	.then((data) => {
		console.log(data);
	});
});