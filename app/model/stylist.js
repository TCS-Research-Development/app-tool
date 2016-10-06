var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:@localhost:3306/sapienssalon');
var Stylist_Table = sequelize.define("Stylist_Table",{
    Stylist_ID:{
         type:Sequelize.INTEGER,
         allowNull:false,
         unique:true,
         primarykey:true,
         autoincrement:true
    },
    Stylist_Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Stylist_Gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Stylist_Age:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Stylist_Experience:{
        type:Sequelize.FLOAT,
        allowNull:false,
    },
    Stylist_Skills:{
        type:Sequelize.STRING(1234),
        allowNull:false,
    },
    Stylist_Salary:{
        type:Sequelize.FLOAT(11),
        allowNull:false
    },
    Stylist_Mobile:{
        type:Sequelize.BIGINT,
        allowNull:false,
        unique:true
    },
    Stylist_Email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});
// Stylist_Table.sync({
//   force: true
// }).then(function() {
//   console.log('Stylist_Table created successfully !');
// });

module.exports = Stylist_Table;
