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
   var customer = {};
       customer.Customer_ID = req.body.Customer_ID;
       customer.Customer_Name = req.body.Customer_Name;
       customer.Customer_Gender = req.body.Customer_Gender;
       customer.Customer_DOB = req.body.Customer_DOB;
       customer.Customer_Mobile = req.body.Customer_Mobile;
       customer.Customer_Email = req.body.Customer_Email;
       customer.Customer_Addr1 = req.body.Customer_Addr1;
       customer.Customer_Addr2 = req.body.Customer_Addr2;
       customer.Customer_State = req.body.Customer_State;
       customer.Customer_City = req.body.Customer_City;
       customer.Customer_Pincode = req.body.Customer_Pincode;

       Customer.bulkCreate(customer).then(function() {
      res.send('insert model sucess');
      },function(err) {
      res.send('insert model faliure'); 
    });
});

return router;
}