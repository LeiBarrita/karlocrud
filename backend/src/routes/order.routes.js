const express = require("express");
const orderController = require("../controllers/order.controller");

const router = express.Router();

router.get("/orders", orderController.getOrder);
router.post("/orders", orderController.createOrder);
router.put("/orders/:id", orderController.updateOrder);
router.delete("/orders/:id", orderController.deleteOrder);

router.patch("orders/:id/state", orderController.updateOrderState);
router.get("shops/:shopId/orders", orderController.getOrdersByShop);
router.get("user/:userId/orders", orderController.getOrdersByUser);
router.get("orders/search", orderController.findOrders);
router.get("orders/:id", orderController.findOrderById);

module.exports = router;
