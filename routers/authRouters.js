const express = require("express");
const router = express.Router();
const authController= require("../controllers/authController");
const authMiddleware= require("../middleware/authMiddleware");


router.post(
    "/",
    authController.authenticateUser
);

router.get("/",authMiddleware,authController.authUser );


module.exports = router;