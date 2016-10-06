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
   var userReg = /^([a-z])+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(req.body.Customer_Name === undefined ){
                var resOBJ = {"success":false,"errorcode":100,"error description":"Please enter the username"};
                return res.json(resOBJ);
    }
   else if(req.body.Customer_Email === undefined ){
                var resOBJ = {"success":false,"errorcode":101,"error description":"Please enter the emailid"};
                return res.json(resOBJ);
    }
    else if(req.body.password === undefined ){
                var resOBJ = {"success":false,"errorcode":102,"error description":"Please enter the password"};
                return res.json(resOBJ);
    }
    else if(!userReg.test(req.body.Customer_Email)){
                var resOBJ = {"success":false,"errorcode":103,"error description":"Please enter a valid email id"};
                return res.json(resOBJ);
    }
   else  if(req.body.password.length<7){
                var resOBJ = {"success":false,"errorcode":104,"error description":"password should be 8 characters long"};
                return res.json(resOBJ);
    }
    else if(req.body.password.search(/(?=.*[a-z])/)){
                var resOBJ = {"success":false,"errorcode":105,"error description":"password should contain atleast 1 lower case"};
                return res.json(resOBJ);
    }
    else if(req.body.password.search(/(?=.*[A-Z])/)){
                var resOBJ = {"success":false,"errorcode":106,"error description":"password should contain atleast 1 upper case"};
                return res.json(resOBJ);
    }
    else if(req.body.password.search(/(?=.*[0-9])/)){
                var resOBJ = {"success":false,"errorcode":107,"error description":"password should contain atleast 1 numeric"};
                return res.json(resOBJ);
    }
    else if(req.body.password.search(/(?=.*[!@#\$%\^&\*])/)){
                var resOBJ = {"success":false,"errorcode":108,"error description":"password should contain atleast 1 special character"};
                return res.json(resOBJ);
    }
    else if(!/^[A-Za-z]+$/.test(req.body.Customer_Name)){
                var resOBJ = {"success":false,"errorcode":109,"error description":"name should contain only strings"};
                return res.json(resOBJ);
    }

    else{

      Customer.create({
        Customer_ID : req.body.Customer_ID,
        Customer_Name : req.body.Customer_Name,
        Customer_Gender:req.body.Customer_Gender,
        Customer_DOB:req.body.Customer_DOB,
        Customer_Mobile:req.body.Customer_Mobile,
        Customer_Email:req.body.Customer_Email,
        Customer_Addr1:req.body.Customer_Addr1,
        Customer_Addr2:req.body.Customer_Addr2,
        Customer_State:req.body.Customer_State,
        Customer_City:req.body.Customer_City,
        Customer_Pincode:req.body.Customer_Pincode,
        password:req.body.password
      }).then(function() {
      res.json({
        "success":true,
        "message":"Values are inserted successfully"
    });
      },function(err) {
      res.send({
        "success":false,
        "message":err,
      }); 
    })
    };
});


router.post('/login',function(req,res){
       var userReg = /^([a-z])+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!userReg.test(req.body.email)){
                var resOBJ = {"success":false,"errorcode":110,"error description":"Please enter a valid email id"};
                return res.json(resOBJ);
        }
    else{

          Customer.findOne({
            where:{Customer_email:req.body.email},
            attributes:['Customer_Email','password']
          }).then(function(customer){   
              if(!customer){
                   res.json({
                      "success":false,
                      "message":"No such user exists"
                    })
              }
              else if((req.body.username==customer.Customer_Email)||(req.body.password==customer.password)){
                    res.json({
                      "success":true,
                      "message":"Redirected to the home page"
                    })
              }
              else{
                   res.json({
                      "success":false,
                      "message":"Username or Password is incorrect"
                    })
              }
          },function(err){
             res.send({
                   "success":false,
                   "message":err,
                    }); 
          })

    }
})

return router;
}