var express = require('express');
var app = express();

app.use(express.static('public'));

//index/root
app.get('/', function(req, res) {
    res.send('carlos created a server here!');
});
//tried to use render and it didnt work
app.get('/index2', function(req, res) {
    res.render('index2.html');
});



//post method that sends a post
app.post('/', function(req, res) {
    res.send('Your name got a Post request');
});





app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});