"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Orders", "shopId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Shops",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "shopId");
  },
};
