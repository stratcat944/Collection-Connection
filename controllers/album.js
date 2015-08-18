var mb = require('musicbrainz');
var CA = require('coverart');
var ca = new CA({userAgent:'CollectConnect'});
var AlbumDocument = require('../models/album.js');

var albumController = {
	create: function(req, res) {



		// MusicBrainz

		mb.searchReleases(req.body.title, { country: 'US' }, function(err, releases){
		    console.log(releases[0].id);
			ca.release(releases[0].id,{size: 'small'}, function(err, response){
				console.log(err);
			    // console.log(response.images[0].image);
			    req.body.coverArt = response.images[0].image
				var newAlbum = new AlbumDocument(req.body)
				newAlbum.save(function(err, album){
					console.log(err);
					res.send(album);
				})
			});
		});

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