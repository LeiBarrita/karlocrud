const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const shopRoutes = require("./routes/shop.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(shopRoutes);
app.use(productRoutes);

module.exports = app;
