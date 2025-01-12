const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", productController.getProduct);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products/:id");

module.exports = router;
