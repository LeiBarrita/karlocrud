const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", productController.getProduct);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

router.get("/shops/:shopId/products", productController.getProductsByShop);
router.get("/products/search", productController.findProduct);
router.get("/products/:id", productController.findProductById);

module.exports = router;
