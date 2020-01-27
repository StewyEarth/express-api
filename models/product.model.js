const { sequelize } = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const sqlite = require("../config/sqlite");

class Product extends Model { };

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
}, {sequelize, modelName: "product"}, );

Product.sync(sqlite[process.env.NODE_ENV]);

module.exports = Product;