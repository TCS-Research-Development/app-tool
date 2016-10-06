var Appointment  = require('../model/appointment');
var express = require('express');

module.exports = function(app, express) {

var router  = express.Router();

router.get('/get', function(req, res) {
  Appointment.findAll({})
  .then(function(appointmentDetails) {
    res.send(appointmentDetails);
  });
});



router.post('/post', function(req, res) {
       Appointment.create({
        Appointment_ID : req.body.Appointment_ID,
        Appointment_StartTime : req.body.Appointment_StartTime,
        Appointment_EndTime : req.body.Appointment_EndTime,
        Stylist_ID : req.body.Stylist_ID,
        Customer_ID : req.body.Customer_ID,
        Service_ID : req.body.Service_ID

       }).then(function() {
      res.send('insert model sucess');
      },function(err) {
      res.send('insert model faliure'); 
    });
});

return router;
}