const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/", verifyToken, isAdmin, userController.getAll);

/* acces my rpfoile */
router.get("/profile", verifyToken, userController.userProfile);

module.exports = router;
