const mongoose = require("mongoose");

// Schema constructor
const Schema = mongoose.Schema;

// Create a Note Schema
const NoteSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;