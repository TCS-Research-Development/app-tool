// Include Express
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname +'/public/views/login.html'));
});


app.listen(3000);
console.log('Application running!');