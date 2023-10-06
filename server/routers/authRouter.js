const Router = require("express");
const router = new Router();
const authController = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/login", authController.login);
router.post("/registration", authController.registration);
router.get("/checkIsAuth", authMiddleware, authController.checkIsAuth);

module.exports = router;
