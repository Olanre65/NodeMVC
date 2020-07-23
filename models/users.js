const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    branch:{
        
    },
    role:{
        type:Sequelize.ENUM("Admin","Manager","Reviewer"),
        allowNull:false
    }

});
module.exports=User