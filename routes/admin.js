const express = require('express');

const router = express.Router();

const productController = require("../controllers/products");

router.get("/add-products",productController.getAddProducts);

router.post("/add-products",productController.postAddProducts);

router.post("/delete/:id",productController.postDelete);

router.post("/update",productController.postUpdate);

module.exports = router;