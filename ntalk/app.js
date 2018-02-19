// Chamando o express e inserindo na variavel app
var express = require('express')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, cookieParser = require('cookie-parser')
	, expressSession = require('express-session')
	, methodOverride = require('method-override')
	, app = express()
;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

// Quando se usa o express, a call é app.listen ao invés do http.listen
app.listen(33000, function(){
	console.log("Ntalk no ar.");
});

