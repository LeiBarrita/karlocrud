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
    }
  }
  Order.init(
    {
      total: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
