var indexController = {
	index: function(req, res) {
		res.render('templates/landingpage.jade');
	},
	templates : function(req, res){
		console.log("templates fired");
		// req.params.templateName
		
	}
};

module.exports = indexController;