"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.State, {
        foreignKey: "stateId",
        as: "state",
      });

      Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      Order.belongsTo(models.Shop, {
        foreignKey: "shopId",
        as: "shop",
      });

      Order.belongsToMany(models.Product, {
        through: "ProductOrders",
      });
    }
  }
  Order.init(
    {
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          isFloat: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
