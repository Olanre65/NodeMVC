const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Branch = sequelize.define('branch',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    postCode:{
        type:Sequelize.STRING,
        allowNull:false
    }


});

module.exports= Branch