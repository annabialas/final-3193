var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.locals.title = 'some stuff';
	res.render('index');
});

router.get('/signup', function(req, res){
	res.locals.title = 'signup';
	res.render('signup');
});

module.exports = router;