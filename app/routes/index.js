var express = require('express');
var path = require('path');

module.exports = function(app, express) {

var router  = express.Router();

router.get('/', function (req, res) {
    res.send('welcome to the hoem page');
});

return router;
}