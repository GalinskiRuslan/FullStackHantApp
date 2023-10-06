const Router = require("express");
const router = new Router();
const vacansyCategoryController = require("../controllers/vacansyCategoryController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/category", vacansyCategoryController.getAllCategory);

router.get("/categoryOne", vacansyCategoryController.getOneCategory);

router.post(
  "/category",
  roleMiddleware(["admin"]),
  vacansyCategoryController.addCategory
);

router.put(
  "/category",
  roleMiddleware(["admin"]),
  vacansyCategoryController.updateCategory
);

router.delete(
  "/category",
  roleMiddleware(["admin"]),
  vacansyCategoryController.deleteCatefory
);

module.exports = router;
