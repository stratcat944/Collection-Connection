var mongoose = require('mongoose');

var albumSchema = mongoose.Schema({

	artist 		: String,
	title		: String,
	personnel	: [{name : String}],
	tracks		: [{name : String}],
	label		: String,
	year		: String

});

var AlbumDocument = mongoose.model('AlbumDocument', albumSchema);

module.exports = AlbumDocument;