const mongoose = require("mongoose");

// Schema constructor reference
const Schema = mongoose.Schema;

// Create a Headline Schema
const HeadlineSchema = new Schema({
	// headline
	headline: {
		type: String,
		required: true
	},
	// summary
	summary: {
		type: String,
		required: true
	},
	// link
	link: {
		type: String,
		required: true
	}
});

// Create a model from the Schema specified above
const Headline = mongoose.model("Headline", HeadlineSchema);

// Exporte the model
module.exports = Headline;