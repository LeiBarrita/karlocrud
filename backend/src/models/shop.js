"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      Shop.hasMany(models.Order, {
        foreignKey: "shopId",
        as: "orders",
      });

      Shop.hasMany(models.Product, {
        foreignKey: "shopId",
        as: "products",
      });
    }
  }
  Shop.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Shop",
    }
  );
  return Shop;
};
