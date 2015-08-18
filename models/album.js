var mongoose = require('mongoose');

var albumSchema = mongoose.Schema({

	artist 		: String,
	title		: String,
	personnel	: [{name : String}],
	tracks		: [{name : String}],
	label		: String,
	year		: String,
	timeStamp	: Date,
	coverArt 	: String, 

});

albumSchema.path('timeStamp').default(function(){
	return new Date();
})

var AlbumDocument = mongoose.model('AlbumDocument', albumSchema);

module.exports = AlbumDocument;