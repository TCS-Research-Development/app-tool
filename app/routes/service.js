var Service  = require('../model/service');
var express = require('express');

module.exports = function(app, express) {

var router  = express.Router();

router.get('/get', function(req, res) {
  Service.findAll({})
  .then(function(serviceList) {
    res.send(serviceList);
  });
});



router.post('/post', function(req, res) {
      Service.create({
       Service_ID : req.body.Service_ID,
       Service_Name : req.body.Service_Name,
       Service_Gender : req.body.Service_Gender,
       Service_Charge : req.body.Service_Charge,
       Service_Duration : req.body.Service_Duration

       }).then(function(err) {
      res.send(err); 
    },function() {
      res.send('Service added successfully');
      });
});

return router;
}