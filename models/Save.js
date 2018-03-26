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
	},
	// `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create a model from the Schema specified above
const Save = mongoose.model("Save", SaveSchema);

// Exporte the model
module.exports = Save;