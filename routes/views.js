var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.locals.title = 'some stuff';
	res.render('index');
});

module.exports = router;