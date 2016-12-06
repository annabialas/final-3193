// var express = require('express');
// var hbs = require('express-handlebars');
// var bodyParser = require('body-parser');
// // var Mongoose = require('mongoose');

// var app = express();

// // require('dotenv').config();

// app.engine('handlebars', hbs({defaultLayout: 'base'}));
// app.set('view engine', 'handlebars');

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// var renderViews = require('./routes/views');
// app.use('/', renderViews);

// ***********************************************************************************

// simple express server
var express = require('express');
var hbs = require('express-handlebars');

var app = express();
var router = express.Router();

app.engine('handlebars', hbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

var renderViews = require('./routes/views');
app.use('/', renderViews);

app.listen(5000);