"use strict"

const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const apiRoutes = require("./routes/api/api-routes");
const viewRoutes = require("./routes/view/view-routes");
const indexRoutes = require("./routes/index");
const mongoose = require("mongoose").set('debug', false);

// Express and Port
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Use mongoose Promises
// Connect to the database
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/headlines-scraping");

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use("/", apiRoutes);
app.use("/", viewRoutes);
app.use("/", indexRoutes);

// Start server
app.listen(port, () => {
		console.log("Server started, listening on port " + port);
	});
