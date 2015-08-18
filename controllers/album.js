var AlbumDocument = require('../models/album.js')

var albumController = {
	create: function(req, res) {
		var newAlbum = new AlbumDocument(req.body)
		newAlbum.save(function(err, album){
			console.log(err);
			res.send(album);
		})
	},

	profile: function(req, res) {
		AlbumDocument.find({}).sort({timeStamp: -1}).exec(function(err, albums){
			res.send(albums);
		})

	}
	
};

module.exports = albumController;

// AlbumDocument is how we get create the document in the DB.
// Find: AlbumDocument.find({}, function(err, documents){

// })