var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:@localhost:3306/sapienssalon');
var Appointment_Table = sequelize.define("Appointment_Table",{
     Appointment_ID:{
         type:Sequelize.INTEGER,
         allowNull:false,
         unique:true,
         primarykey:true
        },
     Appointment_StartTime:{
        type:Sequelize.TIME,
        allowNull:false
    },
     Appointment_EndTime:{
     	type:Sequelize.TIME,
     	allowNull:false
     },
     Stylist_ID:{
     	type:Sequelize.INTEGER,
     	allowNull:false
     },
     Customer_ID:{
        type:Sequelize.INTEGER,
        allowNull:false
     },
     Service_ID:{
        type:Sequelize.INTEGER,
        allowNull:false
     }
});

// Appointment_Table.sync({
//   force: true
// }).then(function() {
//   console.log('Appointment details added successfully !');
// });

module.exports = Appointment_Table;