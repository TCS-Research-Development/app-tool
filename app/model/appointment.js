var Sequelize = require('sequelize');
var customer  = require('./customer');

var stylist  = require('./stylist');

var service = require('./service');

var sequelize = new Sequelize('mysql://root:@localhost:3306/sapienssalon');
var Appointment_Table = sequelize.define("Appointment_Table",{
     Appointment_ID:{
         type:Sequelize.INTEGER,
         allowNull:false,
         unique:true,
         primarykey:true
        },
     Appointment_StartTime:{
        type:Sequelize.STRING,
        allowNull:false
    },
     Appointment_EndTime:{
     	type:Sequelize.STRING,
     	allowNull:false
     },
     Stylist_ID:{
     	type:Sequelize.INTEGER,
        references:'stylists',
        referencesKey:  'Stylist_ID',
        onDelete:       'cascade'
        
     },
     Customer_ID:{
        type:Sequelize.INTEGER,
        references:'customers',
        referencesKey:  'Customer_ID',
        onDelete:       'cascade'
        
     },
     Service_ID:{
        type:Sequelize.INTEGER,
        references:'services',
        referencesKey:  'Service_ID',
        onDelete:       'cascade'
        
     }
});

sequelize["Stylist"].hasMany(sequelize["Appointment"], { foreignKey: 'Stylist_ID'});
sequelize["Appointment"].belongsTo(sequelize["Stylist"], {foreignKey: 'Stylist_ID'});
sequelize
sequelize["Customer"].hasMany(sequelize["Appointment"], { foreignKey: 'Customer_ID'});
sequelize["Appointment"].belongsTo(sequelize["Customer"], {foreignKey: 'Customer_ID'});

sequelize["Service"].hasMany(sequelize["Appointment"], { foreignKey: 'Service_ID'});
sequelize["Appointment"].belongsTo(sequelize["Service"], {foreignKey: 'Service_ID'});

module.exports = Appointment_Table;