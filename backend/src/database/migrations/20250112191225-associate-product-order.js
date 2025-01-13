"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductOrders", {
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Products",
          key: "id",
        },
      },
      orderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ProductOrders");
  },
};
