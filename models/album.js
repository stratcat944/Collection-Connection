var mongoose = require('mongoose');

var albumSchema = mongoose.Schema({

	artist 		: String,
	title		: String,
	person		: String;
	track		: String,
	label		: String,
	year		: String;

});

var AlbumDocument = mongoose.model('AlbumDocument', albumSchema);

module.exports = AlbumDocument;