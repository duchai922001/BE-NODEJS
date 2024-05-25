const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");
//req: request, res: response
router.post("/product", ProductController.createProduct);
router.get("/product", ProductController.getProduct);
router.patch("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);
module.exports = router;
