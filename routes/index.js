//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

// module.exports = router;

exports.home = function(req, res) {
	res.render('index');
}

exports.getContact =  function(req, res) {
	res.render('contact');
}

exports.postContact =  function(req, res) {
	var title = req.body.title;
    var message = req.body.message;
    var serverResponse = {
		'title': title,
    	'message': message
    }
	res.status(200).send(serverResponse);
}