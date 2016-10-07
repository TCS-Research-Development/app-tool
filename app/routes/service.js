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

    }).then(function() {
      res.json({
        "success":true,
        "message":"Services are inserted successfully"
    });
      },function(err) {
      res.send({
        "success":false,
        "message":err,
      });
    });

});


router.get('/delete/:id',function(req,res){
  var id = req.params.id;
 
  Service.findOne({
    where:{id:id}
    }).then(function(service){
      if(!service){
        res.json({
          "success":false,
          "message":"Not find !"
        })
      }
    console.log(service);
    service.destroy().
    then(function(result){
         res.json({
           "success":true,
           "message":"Deleted succesfully "
         })
      },function(err){
        res.send(err);
      })
  })
})

router.put('/update',function(req,res){
  var id = req.body.id;
 
  Service.findOne({
    where:{id:id}
    }).then(function(service){
      if(!service){
        res.json({
          "success":false,
          "message":"Not find !"
        })
      }
      else{
        if(req.body.Service_ID){
          service.Customer_ID=req.body.Service_ID;
        }
        if(req.body.Service_Name){
          service.Service_Name=req.body.Service_Name;
        }
        if(req.body.Service_Gender){
          service.Service_Gender=req.body.Service_Gender;
        }
        if(req.body.Service_Charge){
          service.Service_Charge=req.body.Service_Charge;
        }
        if(req.body.Service_Duration){
          service.Service_Duration=req.body.Service_Duration;
        }

        Service.update({
        Service_ID : req.body.Service_ID,
        Service_Name : req.body.Service_Name,
        Service_Gender:req.body.Service_Gender,
        Service_Charge:req.body.Service_Charge,
        Service_Duration:req.body.Service_Duration
        },{
        where:{
           id:req.body.id
        }
        }
        ).then(function(result){
          res.json({
            "success":true,
            "message":"Updated succesfully"
          })
        },function(err){
          res.json({
            "success":false,
            "message":err
          })
        })
      }
    },function(err){
        res.json({
          "success":false,
          "message":err
        })
    })
})
return router;
}

