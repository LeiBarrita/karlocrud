'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("States", [
      {
        status: "Por pagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "Pagada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "Devuelta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "Cancelada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("States", null, {});
  }
};
