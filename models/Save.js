const mongoose = require("mongoose");

// Schema constructor reference
const Schema = mongoose.Schema;

// Create a Headline Schema
const SaveSchema = new Schema({
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
const Save = mongoose.model("Save", SaveSchema);

// Exporte the model
module.exports = Save;