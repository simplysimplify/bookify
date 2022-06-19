const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Book;
