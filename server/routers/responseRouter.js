const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploadResume");
const responseController = require("../controllers/responseController");

router.get("/response", responseController.getAllResponse);

// router.get("/categoryOne", vacansyCategoryController.getOneCategory);

router.post(
  "/response",
  upload.single("resume"),
  responseController.sendResponseOnVacansy
);
router.post(
  "/responseAnonymous",
  upload.single("resume"),
  responseController.sendResponseAnonym
);
/* 
router.put(
  "/category",
  roleMiddleware(["admin"]),
  upload.single("imageSrc"),
  vacansyCategoryController.updateCategory
);

router.delete(
  "/category",
  roleMiddleware(["admin"]),
  vacansyCategoryController.deleteCategory
); */

module.exports = router;
