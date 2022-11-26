const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController.js")

router.get("/", authMiddleware, categoriaController.leerCategoria);

router.post("/", authMiddleware, categoriaController.crearCategoria)   

router.put("/:id", authMiddleware, categoriaController.actualizarCategoria)
    
router.delete("/:id", authMiddleware, categoriaController.borrarCategoria)
    
module.exports = router;