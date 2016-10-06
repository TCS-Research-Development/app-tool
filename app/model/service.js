var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:@localhost:3306/sapienssalon');
var Service_Table = sequelize.define("Service_Table",{
     Service_ID:{
         type:Sequelize.INTEGER,
         allowNull:false,
         unique:true,
         primarykey:true
        },
     Service_Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
     Service_Gender:{
     	type:Sequelize.STRING,
     	allowNull:false
     },
     Service_Charge:{
     	type:Sequelize.INTEGER,
     	allowNull:false
     },
     Service_Duration:{
     	type:Sequelize.STRING,
     	allowNull:false
     }
});

module.exports = Service_Table;