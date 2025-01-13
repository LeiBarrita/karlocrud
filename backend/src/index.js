const app = require("./app.js");
const { sequelize } = require("./database/database.js");

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Connection stablished successfully");

    app.listen(5000, () => {
      console.log("server has started on port 5000");
    });
  } catch (e) {
    console.log("Connection failed");
  }
}

start();
