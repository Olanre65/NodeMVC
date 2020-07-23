const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Clinician = sequelize.define('clinician',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    startDate:{
        type:Sequelize.DATEONLY
    },    
    ClinicianType:{
        type:Sequelize.ENUM("Nurse","Doctor","Psycologist","Pharmacist"),
        allowNull:false
    }
});

module.exports= Clinician