const mongoose = require("mongoose");
const models = require("../models");

module.exports.saveNotes = function(req, res) {

	models.Note.create(req.body)
	.then( savedNote => {
		return models.Save.findOneAndUpdate({_id: req.params.id}, { $push: {note: savedNote._id} }, { new: true} );
	})
	.then( updatedArticle => {
		res.json(updatedArticle);
	})
	.catch( error => console.error(error));

}

module.exports.getNotes = function(req, res) {

	models.Save.findById({_id: req.params.id})
	.populate("note")
	.exec( function(error, articleWithNotes) {
		res.json(articleWithNotes);
	});
}

module.exports.deleteNotes = function(req, res) {

	models.Note.remove({_id: req.params.id})
	.then( deleteResults => {
		res.json(deleteResults);
	})
	.catch( error => console.error(error));
}