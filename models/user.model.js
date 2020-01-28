const { sequelize } = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const sqlite = require("../config/sqlite");

class User extends Model { };

User.init({
    indexes:[
        {
            unique: true,
            fields: ["email"]
        }
    ],
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        validate:{
            notEmpty: true
        }
    }
}, {sequelize, modelName: "user"}, );

User.sync(sqlite[process.env.NODE_ENV]);

module.exports = User;