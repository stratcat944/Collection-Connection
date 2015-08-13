var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var albumController = require('./controllers/album.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', indexController.index);
app.get('/templates/:templateName', indexController.templates);

app.post('/albums/create', albumController.create)

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
