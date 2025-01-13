"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Mario",
        email: "mario@mail.com",
        password: "mario1234",
        verified: "true",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Selena",
        email: "selena@mail.com",
        password: "selena1234",
        verified: "true",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Roy",
        email: "roy@mail.com",
        password: "roy1234",
        verified: "true",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Helena",
        email: "helena@mail.com",
        password: "helena1234",
        verified: "true",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Marco",
        email: "marco@mail.com",
        password: "marco1234",
        verified: "true",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Miriam",
        email: "miriam@mail.com",
        password: "miriam1234",
        verified: "true",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Mely",
        email: "mely@mail.com",
        password: "mely1234",
        verified: "true",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Sally",
        email: "sally@mail.com",
        password: "sally1234",
        verified: "true",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("States", null, {});
  },
};
