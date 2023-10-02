const Router = require("express");
const router = new Router();
const authController = require("../controllers/authControllers");

router.post("/login", authController.login);

module.exports = router;
