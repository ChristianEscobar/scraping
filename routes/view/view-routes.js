module.exports = function(app) {
	app.get("/saved", function(req, res) {
		res.render("saved");
	});
};