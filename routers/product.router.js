const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");
const verifyToken = require("../middlewares/verifyToken");
//req: request, res: response
router.post("/product", ProductController.createProduct);
router.get("/product", verifyToken, ProductController.getProduct); //pass => req.user
router.patch("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);
module.exports = router;
