// Include Express
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize')
var sequelize = new Sequelize('sapienssalon', 'root', '', {
      dialect: "mysql",
      port:    3306, 
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');

var routes = require('./app/routes/index')(app, express);
var customer  = require('./app/routes/customer')(app, express);
var service = require('./app/routes/service')(app, express);
var appointment = require('./app/routes/appointment')(app, express);

app.use('/', routes);
app.use('/customers', customer);
app.use('/services', service);
app.use('/appointments', appointment);

app.listen(3000);
console.log('Application running!');


