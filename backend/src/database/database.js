import Sequelize from "sequelize";
import "dotenv/config";

const env = process.env;

export const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
  }
);
