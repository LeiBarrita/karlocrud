import Sequelize from "sequelize";

export const sequelize = new Sequelize("karlotest", "postgres", "420zerdt!", {
  host: "localhost",
  dialect: "postgres",
});
