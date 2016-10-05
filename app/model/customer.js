var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:@localhost:3306/sapien');
var Customer_Table = sequelize.define("Customer_Table",{
     Customer_ID:{
         type:Sequelize.INTEGER,
         allowNull:false,
         unique:true,
         primarykey:true
        },
    Customer_Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_Gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_DOB:{
        type:Sequelize.DATE,
        allowNull:false
    },
    Customer_Mobile:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    Customer_Email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Customer_Addr1:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_Addr2:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_State:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_City:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Customer_Pincode:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});
Customer_Table.sync({
  force: true
}).then(function() {
  console.log('created successfully !');
});

module.exports = Customer_Table;
