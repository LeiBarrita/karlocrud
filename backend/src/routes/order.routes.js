const express = require("express");
const orderController = require("../controllers/order.controller");

const router = express.Router();

router.get("/orders", orderController.getOrder);
router.post("/orders", orderController.createOrder);
router.put("/orders/:id", orderController.updateProduct);
router.delete("/orders/:id", orderController.deleteProduct);
router.get("/orders/:id");

module.exports = router;
