"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Shops", "userId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Shops", "userId");
  },
};
