const express = require("express");
const shopController = require("../controllers/shop.controller");

const router = express.Router();

router.get("/shops", shopController.getShops);
router.post("/shops", shopController.createShop);
router.put("/shops/:id", shopController.updateShop);
router.delete("/shops/:id", shopController.deleteShop);
router.get("/shops/search", shopController.findShops);
router.get("/shops/:id", shopController.findShopById);

module.exports = router;
