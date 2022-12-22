const express = require("express");
const router = express.Router();
const authMiddleware= require("../middleware/authMiddleware");
const productController = require ("../controllers/productController");

router.get    ("/home",productController.readProductHome);


router.get    ("/categories/:id",authMiddleware,productController.readProduct);


router.get    ("/:id",authMiddleware, productController.readProductId);


router.post   ("/",authMiddleware,productController.createProduct);

router.put    ("/:id",authMiddleware,productController.updateProduct);

router.delete ("/:id",authMiddleware,productController.deleteProduct);

module.exports= router;
