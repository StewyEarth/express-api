const { sequelize } = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const sqlite = require("../config/sqlite");

class Product extends Model { };

Product.init({
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: true,
            isFloat: true
        }
    },
    description:{ 
        type: DataTypes.TEXT,
        notEmpty: true
    },
}, {sequelize, modelName: "product"}, );

Product.sync(sqlite[process.env.NODE_ENV]);

module.exports = Product;