var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function (req, res) {
	res.render('login', {
		url: "http://localhost:4000/logged"
	})
})

app.get('/logged', function (req, res) {
	res.render('logged')
})

app.listen(4000);
app.use(function (req, res, next) {
    res.status(404).send('Page not found!')
});