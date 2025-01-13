"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Shops", [
      {
        name: "IKEA",
        userId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Walmart",
        userId: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soriana",
        userId: "7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cotsco",
        userId: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Shops", null, {});
  },
};
