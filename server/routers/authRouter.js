const Router = require("express");
const router = new Router();
const authController = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const vacansyCategoryController = require("../controllers/vacansyCategoryController");

router.post("/login", authController.login);
router.post("/registration", authController.registration);

router.get(
  "/category",
  roleMiddleware(["admin"]),
  vacansyCategoryController.getAllCategory
);

module.exports = router;
