var Customer  = require('../model/customer');
var express = require('express');

module.exports = function(app, express) {

var router  = express.Router();

router.get('/get', function(req, res) {
  Customer.findAll({})
  .then(function(customerList) {
    res.send(customerList);
  });
});



router.post('/post', function(req, res) {
       Customer.create({
       Customer_ID : req.body.Customer_ID,
       Customer_Name : req.body.Customer_Name,
       Customer_Gender : req.body.Customer_Gender,
       Customer_DOB : req.body.Customer_DOB,
       Customer_Mobile : req.body.Customer_Mobile,
       Customer_Email : req.body.Customer_Email,
       Customer_Addr1 : req.body.Customer_Addr1,
       Customer_Addr2 : req.body.Customer_Addr2,
       Customer_State : req.body.Customer_State,
       Customer_City : req.body.Customer_City,
       Customer_Pincode : req.body.Customer_Pincode

       }).then(function() {
      res.send('insert model sucess');
      },function(err) {
      res.send('insert model faliure'); 
    });
});

return router;
}