"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Orders", [
    //   {
    //     shopId: "1",
    //     userId: "1",
    //     stateId: "2",
    //     total: "5",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     shopId: "Walmart",
    //     userId: "6",
    //     stateId: "6",
    //     total: "6",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     shopId: "Soriana",
    //     userId: "7",
    //     stateId: "7",
    //     total: "7",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     shopId: "Cotsco",
    //     userId: "8",
    //     stateId: "8",
    //     total: "8",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    // return queryInterface.bulkDelete("Orders", null, {});
  },
};
