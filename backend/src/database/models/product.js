"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Shop, {
        foreignKey: "shopId",
        as: "shop",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
