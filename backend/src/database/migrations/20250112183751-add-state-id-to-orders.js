'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Orders", "stateId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "States",
        key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "stateId");
  }
};
