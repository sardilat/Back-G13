const express = require("express");
const user = require("../models/user");
const router = express.Router();
const userController = require("../controllers/userController");
/*
router.get("/", (req, res) => {
    res.json({ msg: "desde router get" })
});

router.post("/", (req, res) => {
    res.json({ msg: "desde router post" })
});

router.put("/", (req, res) => {
    res.json({ msg: "desde router put" })
});

router.delete("/", (req, res) => {
    res.json({ msg: "desde router delete" })
});


/* Creacion de rutas  por entidad (User) tipo rest  get, pos, put , delete.
    y exportacion para uso en otras .js
*/
router.post(
    "/",
    userController.createUser,
);

module.exports = router;