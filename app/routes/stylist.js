var Stylist  = require('../model/stylist');
var express = require('express');

module.exports = function(app, express) {

var router  = express.Router();

router.get('/get', function(req, res) {
  Stylist.findAll({})
  .then(function(StylistList) {
    res.send(StylistList);
  });
});



router.post('/post', function(req, res) {
      Stylist.create({
        Stylist_ID : req.body.Stylist_ID,  
        Stylist_Name : req.body.Stylist_Name,
        Stylist_Gender:req.body.Stylist_Gender,
        Stylist_Age:req.body.Stylist_Age,
        Stylist_Experience:req.body.Stylist_Experience,
        Stylist_Skills:req.body.Stylist_Skills,
        Stylist_Salary:req.body.Stylist_Salary,
        Stylist_Mobile:req.body.Stylist_Mobile,
        Stylist_Email:req.body.Stylist_Email
      }).then(function() {
      res.send('insert model sucess');
      },function(err) {
      res.send(err); 
    });
});

return router;
}