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
   var service = {};
       service.Service_ID = req.body.Service_ID;
       service.Service_Name = req.body.Service_Name;
       service.Service_Gender = req.body.Service_Gender;
       service.Service_Charge = req.body.Service_Charge;
       service.Service_Duration = req.body.Service_Duration;

       Service.bulkCreate(service).then(function() {
      res.send('Service added successfully');
      },function(err) {
      res.send('Failed to add service'); 
    });
});

return router;
}