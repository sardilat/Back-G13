const express = require("express");
const router = express.Router();
const authMiddleware= require("../middleware/authMiddleware");
const categoryController= require("../controllers/categoryController")


router.get    ("/home", categoryController.readCategoryHome);

router.get    ("/",authMiddleware, categoryController.readCategory);

router.get    ("/:id",authMiddleware, categoryController.readCategoryId);


router.post   ("/",authMiddleware, categoryController.createCategory);

router.put    ("/:id",authMiddleware, categoryController.updateCategory);

router.delete ("/:id",authMiddleware, categoryController.deleteCategory);

module.exports= router;